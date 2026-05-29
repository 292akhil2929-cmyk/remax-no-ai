import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const brokerUrl = 'https://www.propertyfinder.ae/en/broker/remax-zam-12689';
    const response = await fetch(brokerUrl);
    const html = await response.text();

    const listings = [];

    // Extract JSON from script tags (PropertyFinder stores listing data in JSON)
    const jsonMatch = html.match(/<script[^>]*>[\s]*window\.__INITIAL_STATE__\s*=\s*({[\s\S]*?});[\s]*<\/script>/);
    
    if (!jsonMatch) {
      // Fallback: try to extract from the raw HTML
      return Response.json({ listings: [], count: 0 });
    }

    try {
      const initialState = JSON.parse(jsonMatch[1]);
      
      // Navigate through the JSON structure to find listings
      const listings_data = initialState?.results?.data?.items || [];

      for (const item of listings_data.slice(0, 20)) {
        // Extract basic property info
        const price = item.price || 0;
        const bedrooms = item.bedroomCount || 0;
        const bathrooms = item.bathroomCount || 1;
        const area = item.unitArea || null;
        const title = item.title || 'Property';
        const location = item.community?.name || item.suburb?.name || 'Dubai';

        // Extract images - PropertyFinder stores them in photos array
        const images = item.photos ? item.photos.map(p => p.url || p.urlSmall).filter(Boolean) : [];

        listings.push({
          title: `${bedrooms > 0 ? bedrooms + ' BR' : 'Studio'} - ${title}`,
          price_aed: price,
          bedrooms: bedrooms > 0 ? bedrooms : 0,
          bathrooms,
          area_sqft: area,
          location,
          transaction_type: 'Residential Sale',
          property_type: item.category || 'Apartment',
          source: 'PropertyFinder',
          featured: false,
          image_url: images[0] || null,
          gallery_images: images.slice(0, 20),
        });
      }
    } catch (parseError) {
      return Response.json({ error: 'Failed to parse listing data', listings: [] }, { status: 200 });
    }

    return Response.json({ listings, count: listings.length });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});