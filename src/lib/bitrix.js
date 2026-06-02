export async function sendLeadToBitrix(leadData) {
  const baseUrl = import.meta.env.VITE_BITRIX_WEBHOOK_URL;
  if (!baseUrl) {
    return { ok: false, error: 'Missing VITE_BITRIX_WEBHOOK_URL' };
  }

  const url = `${baseUrl.replace(/\/?$/, '/')}` + 'crm.lead.add.json';

  const payload = {
    fields: {
      TITLE: `Website Lead: ${leadData.lead_type || 'Investor'} (${leadData.source || 'Website'})`,
      NAME: leadData.full_name,
      STATUS_ID: 'NEW',
      PHONE: [{ VALUE: leadData.phone, VALUE_TYPE: 'WORK' }],
      EMAIL: [{ VALUE: leadData.email, VALUE_TYPE: 'WORK' }],
      COMMENTS: `Investment Budget: ${leadData.investment_budget || 'Not specified'}\nInvestment Goal: ${leadData.investment_goal || 'Not specified'}\nProperty Interest: ${leadData.property_interest || 'Not specified'}\nSubmitted from: ${window.location.href}`,
      SOURCE_ID: 'WEB'
    },
    REGISTER_SONET_EVENT: 'Y'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return { ok: false, status: response.status };
    }

    return { ok: true, data: await response.json() };
  } catch (error) {
    return { ok: false, error: error?.message || 'Network error' };
  }
}
