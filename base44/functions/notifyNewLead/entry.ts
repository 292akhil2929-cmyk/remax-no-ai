import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const SALES_TEAM_EMAIL = 'info@remaxzam.ae'; // Update to your sales team distribution email

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const lead = body.data || {};

    const subject = `🏠 New Lead: ${lead.full_name || 'Unknown'} — ${lead.lead_type || 'Inquiry'}`;

    const emailBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
  <div style="background: #1a3a5c; padding: 20px 24px; border-radius: 8px 8px 0 0;">
    <h2 style="color: #ffffff; margin: 0; font-size: 18px;">New Lead Received — REMAX ZAM</h2>
  </div>
  <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 40%;">Name</td>
        <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 13px;">${lead.full_name || '—'}</td>
      </tr>
      <tr style="background: #f9fafb;">
        <td style="padding: 8px; color: #6b7280; font-size: 13px;">Email</td>
        <td style="padding: 8px; color: #111827; font-size: 13px;">${lead.email || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td>
        <td style="padding: 8px 0; color: #111827; font-size: 13px;">${lead.phone || '—'}</td>
      </tr>
      <tr style="background: #f9fafb;">
        <td style="padding: 8px; color: #6b7280; font-size: 13px;">Country</td>
        <td style="padding: 8px; color: #111827; font-size: 13px;">${lead.country || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Lead Type</td>
        <td style="padding: 8px 0; font-size: 13px;"><span style="background: #dbeafe; color: #1d4ed8; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">${lead.lead_type || '—'}</span></td>
      </tr>
      <tr style="background: #f9fafb;">
        <td style="padding: 8px; color: #6b7280; font-size: 13px;">Investment Budget</td>
        <td style="padding: 8px; color: #111827; font-size: 13px;">${lead.investment_budget || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Investment Goal</td>
        <td style="padding: 8px 0; color: #111827; font-size: 13px;">${lead.investment_goal || '—'}</td>
      </tr>
      <tr style="background: #f9fafb;">
        <td style="padding: 8px; color: #6b7280; font-size: 13px;">Property Interest</td>
        <td style="padding: 8px; color: #111827; font-size: 13px;">${lead.property_interest || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Source</td>
        <td style="padding: 8px 0; color: #111827; font-size: 13px;">${lead.source || '—'}</td>
      </tr>
      ${lead.notes ? `
      <tr style="background: #f9fafb;">
        <td style="padding: 8px; color: #6b7280; font-size: 13px; vertical-align: top;">Notes</td>
        <td style="padding: 8px; color: #111827; font-size: 13px;">${lead.notes}</td>
      </tr>` : ''}
    </table>
    <div style="margin-top: 20px; padding: 12px 16px; background: #fef3c7; border-radius: 6px; border-left: 4px solid #f59e0b;">
      <p style="margin: 0; color: #92400e; font-size: 13px; font-weight: 600;">⚡ Action Required: Please contact this lead within 1 hour for best conversion rates.</p>
    </div>
    <p style="margin-top: 16px; color: #9ca3af; font-size: 11px; text-align: center;">
      Submitted: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })} (Dubai time)
    </p>
  </div>
</div>
    `.trim();

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: SALES_TEAM_EMAIL,
      from_name: 'REMAX ZAM Leads',
      subject,
      body: emailBody,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});