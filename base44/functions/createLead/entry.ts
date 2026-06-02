import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const MAX_PER_10_MINUTES = 2;
const MAX_PER_HOUR = 5;
const TEN_MINUTES_MS = 10 * 60 * 1000;
const ONE_HOUR_MS = 60 * 60 * 1000;

function normalizeEmail(email) {
  if (!email || typeof email !== 'string') return '';
  return email.trim().toLowerCase();
}

function parseCreatedDate(value) {
  const date = new Date(value || 0);
  return Number.isNaN(date.getTime()) ? null : date;
}

Deno.serve(async (req) => {
  try {
    if (req.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 });
    }

    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const lead = body || {};
    const email = normalizeEmail(lead.email);

    if (!lead.full_name || !email || !lead.lead_type) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const recentByEmail = await base44.asServiceRole.entities.Lead.filter(
      { email },
      '-created_date',
      10
    );

    const now = Date.now();
    const recent10Min = recentByEmail.filter((item) => {
      const created = parseCreatedDate(item.created_date);
      return created ? now - created.getTime() <= TEN_MINUTES_MS : false;
    });
    const recentHour = recentByEmail.filter((item) => {
      const created = parseCreatedDate(item.created_date);
      return created ? now - created.getTime() <= ONE_HOUR_MS : false;
    });

    if (recent10Min.length >= MAX_PER_10_MINUTES || recentHour.length >= MAX_PER_HOUR) {
      return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const created = await base44.asServiceRole.entities.Lead.create({
      ...lead,
      email,
    });

    return Response.json({ success: true, lead: created });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
