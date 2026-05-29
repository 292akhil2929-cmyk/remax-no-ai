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
    
    // Extract property listing blocks - look for data between property cards
    const cardRegex = /data-testid="property-card"[^>]*>[\s\S]*?<\/a>/g;
    const matches = html.matchAll(cardRegex);

    for (const match of matches) {
      const block = match[0];

      // Extract price
      const priceMatch = block.match(/AED\s*([\d,]+)/);
      if (!priceMatch) continue;
      const price = parseInt(priceMatch[1].replace(/,/g, ''));

      // Extract bedrooms - look for number followed by BR or Bedroom
      const bedroomMatch = block.match(/(\d+)\s*BR|(\d+)\s+Bedroom/i);
      const bedrooms = bedroomMatch ? parseInt(bedroomMatch[1] || bedroomMatch[2]) : 0;

      // Extract bathrooms
      const bathroomMatch = block.match(/(\d+)\s*Bath/i);
      const bathrooms = bathroomMatch ? parseInt(bathroomMatch[1]) : 1;

      // Extract area
      const areaMatch = block.match(/(\d+)\s*sqft/i);
      const area = areaMatch ? parseInt(areaMatch[1]) : null;

      // Extract location from title text
      const titleMatch = block.match(/>([^<]*Dubai[^<]*)</);
      let location = 'Dubai';
      let titleText = 'Property';
      
      if (titleMatch && titleMatch[1]) {
        const text = titleMatch[1].trim();
        titleText = text.replace(/&[a-z]+;/g, '').replace(/\s+/g, ' ').substring(0, 100);
        const parts = text.split(/[,\-]/);
        location = parts[parts.length - 1]?.trim() || 'Dubai';
      }

      // Extract images
      const imgRegex = /src=["']([^"']*?(?:propertyfinder|static\.shared\.propertyfinder)[^"']*\.(?:jpg|jpeg|png|webp|webp))/gi;
      const images = [];
      let imgMatch;
      const seen = new Set();
      
      while ((imgMatch = imgRegex.exec(block)) !== null) {
        const imgUrl = imgMatch[1];
        if (imgUrl && !seen.has(imgUrl)) {
          images.push(imgUrl);
          seen.add(imgUrl);
        }
      }

      listings.push({
        title: `${bedrooms > 0 ? bedrooms + ' BR' : 'Studio'} ${titleText}`.trim(),
        price_aed: price,
        bedrooms: bedrooms > 0 ? bedrooms : 0,
        bathrooms,
        area_sqft: area,
        location,
        transaction_type: 'Residential Sale',
        property_type: 'Apartment',
        source: 'PropertyFinder',
        featured: false,
        image_url: images[0] || null,
        gallery_images: images.slice(0, 20),
      });

      if (listings.length >= 20) break;
    }

    return Response.json({ listings, count: listings.length });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});