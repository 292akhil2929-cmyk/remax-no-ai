function getBitrixUrl() {
  const baseUrl = import.meta.env.VITE_BITRIX_WEBHOOK_URL;
  if (!baseUrl) return null;
  return `${baseUrl.replace(/\/?$/, '/')}crm.lead.add.json`;
}

async function postToBitrix(payload) {
  const url = getBitrixUrl();
  if (!url) return { ok: false, error: 'Missing VITE_BITRIX_WEBHOOK_URL' };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) return { ok: false, status: response.status };
    return { ok: true, data: await response.json() };
  } catch (error) {
    return { ok: false, error: error?.message || 'Network error' };
  }
}

export async function sendLeadToBitrix(formData) {
  return postToBitrix({
    fields: {
      NAME: formData.full_name,
      PHONE: [{ VALUE: formData.phone, VALUE_TYPE: 'WORK' }],
      EMAIL: [{ VALUE: formData.email, VALUE_TYPE: 'WORK' }],
      SOURCE_ID: 'WEB',
      COMMENTS: `Investment Budget: ${formData.investment_budget || 'Not specified'}\nInvestment Goal: ${formData.investment_goal || 'Not specified'}\nProperty Interest: ${formData.property_interest || 'Not specified'}\nSubmitted from: ${window.location.href}`,
    },
    params: { REGISTER_SONET_EVENT: 'Y' },
  });
}

export async function sendPropertyViewingToBitrix(viewingData) {
  return postToBitrix({
    fields: {
      TITLE: `Property Inquiry: ${viewingData.property_title}`,
      NAME: viewingData.full_name,
      PHONE: [{ VALUE: viewingData.phone, VALUE_TYPE: 'WORK' }],
      EMAIL: [{ VALUE: viewingData.email, VALUE_TYPE: 'WORK' }],
      SOURCE_ID: 'WEB',
      COMMENTS: `Property Name: ${viewingData.property_title}\nProperty Reference: ${viewingData.property_id || 'Not specified'}\nAssigned Agent: ${viewingData.assigned_agent_name || 'Unassigned'}\nSubmitted from: ${window.location.href}`,
    },
    params: { REGISTER_SONET_EVENT: 'Y' },
  });
}
