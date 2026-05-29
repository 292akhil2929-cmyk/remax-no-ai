import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // PropertyFinder API endpoint for REMAX ZAM broker
    const brokerUrl = 'https://www.propertyfinder.ae/en/broker/remax-zam-12689';
    
    const response = await fetch(brokerUrl);
    const html = await response.text();

    // Parse listings from HTML
    const listings = [];
    
    // Extract property cards using regex patterns
    const propertyPattern = /<h3[^>]*>([^<]+)<\/h3>[\s\S]*?<strong>([0-9,]+)\s*AED<\/strong>/g;
    const titlePattern = /for sale in ([^\n]+)/;
    const bedroomPattern = /(\d+)\s+(?:Bedroom|studio)/;
    const bathroomPattern = /(\d+)\s+Bathroom/;
    const areaPattern = /(\d+)\s+sqft/;

    let match;
    const seen = new Set();

    // Extract from the provided markdown structure
    const listingBlocks = html.split('Apartment').slice(1);
    
    for (const block of listingBlocks.slice(0, 10)) {
      // Get price
      const priceMatch = block.match(/([0-9,]+)\s*AED/);
      if (!priceMatch) continue;
      
      const price = parseInt(priceMatch[1].replace(/,/g, ''));

      // Get title from link text
      const titleMatch = block.match(/for sale in ([^\n"<]+)/);
      const title = titleMatch ? titleMatch[1].trim() : 'Property';

      // Avoid duplicates
      if (seen.has(title + price)) continue;
      seen.add(title + price);

      // Get property details
      const bedroomMatch = block.match(/(\d+)\s+(?:Bedroom|studio)/i);
      const bathroomMatch = block.match(/(\d+)\s+Bathroom/i);
      const areaMatch = block.match(/(\d+)\s+sqft/i);

      const bedrooms = bedroomMatch ? parseInt(bedroomMatch[1]) : 0;
      const bathrooms = bathroomMatch ? parseInt(bathroomMatch[1]) : 1;
      const area = areaMatch ? parseInt(areaMatch[1]) : 0;

      // Extract location
      const locationMatch = block.match(/([^,]+),\s*([^,]+),\s*([^,]+),\s*Dubai/);
      const location = locationMatch ? locationMatch[3].trim() : 'Dubai';

      listings.push({
        title: `${bedrooms ? bedrooms + ' BR ' : 'Studio'} Apartment in ${title.split(' in ')[1] || title}`.substring(0, 100),
        price_aed: price,
        bedrooms: bedrooms > 0 ? bedrooms : null,
        bathrooms,
        area_sqft: area > 0 ? area : null,
        location,
        transaction_type: 'Residential Sale',
        property_type: 'Apartment',
        source: 'PropertyFinder',
        featured: false,
      });
    }

    return Response.json({ listings, count: listings.length });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});