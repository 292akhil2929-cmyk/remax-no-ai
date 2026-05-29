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
    
    // Extract property listing blocks
    const listingRegex = /Apartment.*?(\d+(?:,\d+)*)\s*AED.*?(?=Apartment|$)/gs;
    const matches = html.matchAll(listingRegex);

    for (const match of matches) {
      const block = match[0];

      // Extract price
      const priceMatch = block.match(/(\d+(?:,\d+)*)\s*AED/);
      if (!priceMatch) continue;
      const price = parseInt(priceMatch[1].replace(/,/g, ''));

      // Extract title/location
      const titleMatch = block.match(/for sale in\s+([^\n<]+)/i);
      const title = titleMatch ? titleMatch[1].trim().substring(0, 80) : 'Property';

      // Extract bedrooms
      const bedroomMatch = block.match(/(\d+)\s+(?:Bedroom|bedroom)/i);
      const bedrooms = bedroomMatch ? parseInt(bedroomMatch[1]) : 0;

      // Extract bathrooms
      const bathroomMatch = block.match(/(\d+)\s+Bathroom/i);
      const bathrooms = bathroomMatch ? parseInt(bathroomMatch[1]) : 1;

      // Extract area
      const areaMatch = block.match(/(\d+)\s+sqft/i);
      const area = areaMatch ? parseInt(areaMatch[1]) : null;

      // Extract location/community (last part before Dubai)
      const locationMatch = block.match(/([^,]+),\s*([^,]+),\s*Dubai/);
      const location = locationMatch ? locationMatch[2].trim() : 'Dubai';

      listings.push({
        title: `${bedrooms > 0 ? bedrooms + ' BR' : 'Studio'} - ${title}`,
        price_aed: price,
        bedrooms: bedrooms > 0 ? bedrooms : 0,
        bathrooms,
        area_sqft: area,
        location,
        transaction_type: 'Residential Sale',
        property_type: 'Apartment',
        source: 'PropertyFinder',
        featured: false,
      });

      if (listings.length >= 20) break;
    }

    return Response.json({ listings, count: listings.length });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});