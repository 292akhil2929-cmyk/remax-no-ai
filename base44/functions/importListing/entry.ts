import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

// Parses a property listing URL from PropertyFinder, Bayut, or Dubizzle
// and creates a Property record in the database using AI extraction.

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Admin access required' }, { status: 403 });
    }

    const { url } = await req.json();
    if (!url) return Response.json({ error: 'URL is required' }, { status: 400 });

    // Fetch the page content
    const pageRes = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; REMAX-ZAM-Bot/1.0)',
        'Accept': 'text/html,application/xhtml+xml',
      }
    });
    const html = await pageRes.text();

    // Strip tags to get text content
    const text = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .substring(0, 8000);

    // Use AI to extract structured data
    const extracted = await base44.asServiceRole.integrations.Core.InvokeLLM({
      prompt: `Extract property listing data from this real estate page text. Return ONLY valid JSON matching the schema exactly.

Page text:
${text}

Source URL: ${url}

Return JSON with these exact fields (use null for missing values):
{
  "title": "property title/headline",
  "location": "area/district in Dubai",
  "community": "specific community/building name",
  "property_type": one of ["Apartment","Villa","Penthouse","Townhouse","Office"],
  "category": one of ["Off-Plan","Ready","Resale"],
  "bedrooms": number or null (0 for studio),
  "bathrooms": number or null,
  "area_sqft": number or null,
  "price_aed": number or null,
  "developer": "developer name or null",
  "completion_date": "completion date string or null",
  "description": "full property description text",
  "image_url": null,
  "featured": false,
  "status": "Available"
}`,
      response_json_schema: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          location: { type: 'string' },
          community: { type: 'string' },
          property_type: { type: 'string' },
          category: { type: 'string' },
          bedrooms: { type: 'number' },
          bathrooms: { type: 'number' },
          area_sqft: { type: 'number' },
          price_aed: { type: 'number' },
          developer: { type: 'string' },
          completion_date: { type: 'string' },
          description: { type: 'string' },
          image_url: { type: 'string' },
          featured: { type: 'boolean' },
          status: { type: 'string' },
        }
      }
    });

    // Validate and clean
    if (!extracted.title || !extracted.price_aed) {
      return Response.json({ error: 'Could not extract listing data from this URL. Please check the URL and try again.' }, { status: 422 });
    }

    // Enforce enum values
    const validTypes = ['Apartment', 'Villa', 'Penthouse', 'Townhouse', 'Office'];
    const validCategories = ['Off-Plan', 'Ready', 'Resale'];
    if (!validTypes.includes(extracted.property_type)) extracted.property_type = 'Apartment';
    if (!validCategories.includes(extracted.category)) extracted.category = 'Ready';

    // Create the property record
    const property = await base44.asServiceRole.entities.Property.create(extracted);

    return Response.json({ success: true, property });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});