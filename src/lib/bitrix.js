const FALLBACK_ASSIGNED_BY_ID = 54;   // Default lead routing

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
  const comments = formData.is_seller
    ? `Property Interest: ${formData.property_interest || 'Not specified'}\n${formData.notes || ''}\nSubmitted from: ${window.location.href}`
    : `Investment Budget: ${formData.investment_budget || 'Not specified'}\nInvestment Goal: ${formData.investment_goal || 'Not specified'}\nProperty Interest: ${formData.property_interest || 'Not specified'}\nSubmitted from: ${window.location.href}`;

  return postToBitrix({
    fields: {
      TITLE: formData.title || 'Website General Lead',
      NAME: formData.full_name,
      PHONE: [{ VALUE: formData.phone, VALUE_TYPE: 'WORK' }],
      EMAIL: [{ VALUE: formData.email, VALUE_TYPE: 'WORK' }],
      SOURCE_ID: 'WEB',
      ASSIGNED_BY_ID: FALLBACK_ASSIGNED_BY_ID,
      OPPORTUNITY: formData.opportunity,
      CURRENCY_ID: 'AED',
      COMMENTS: comments,
    },
    params: { REGISTER_SONET_EVENT: 'Y' },
  });
}

function getBitrixRecruitmentUrl() {
  const baseUrl = import.meta.env.VITE_BITRIX_RECRUITMENT_WEBHOOK_URL;
  if (!baseUrl) return null;
  return `${baseUrl.replace(/\/?$/, '/')}crm.objects.item.add.json`;
}

async function postToBitrixRecruitment(payload) {
  const url = getBitrixRecruitmentUrl();
  if (!url) return { ok: false, error: 'Missing VITE_BITRIX_RECRUITMENT_WEBHOOK_URL' };

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

export async function sendApplicantToBitrixSPA(applicantData) {
  const comments = [
    applicantData.notes ? `Experience / Notes: ${applicantData.notes}` : '',
    `Submitted from: ${window.location.href}`,
  ].filter(Boolean).join('\n');

  return postToBitrixRecruitment({
    entityTypeId: 1038,
    fields: {
      TITLE: `Website Agent Applicant: ${applicantData.full_name}`,
      NAME: applicantData.full_name,
      EMAIL: [{ VALUE: applicantData.email, VALUE_TYPE: 'WORK' }],
      PHONE: [{ VALUE: applicantData.phone, VALUE_TYPE: 'WORK' }],
      COMMENTS: comments,
    },
  });
}

export async function sendPropertyViewingToBitrix(viewingData) {
  return postToBitrix({
    fields: {
      TITLE: `Website Property Inquiry: ${viewingData.property_title}`,
      NAME: viewingData.full_name,
      PHONE: [{ VALUE: viewingData.phone, VALUE_TYPE: 'WORK' }],
      EMAIL: [{ VALUE: viewingData.email, VALUE_TYPE: 'WORK' }],
      SOURCE_ID: 'WEB',
      ASSIGNED_BY_ID: FALLBACK_ASSIGNED_BY_ID,
      COMMENTS: `Property Name: ${viewingData.property_title}\nProperty Reference: ${viewingData.property_id || 'Not specified'}\nAssigned Agent: ${viewingData.assigned_agent_name || 'Unassigned'}\nSubmitted from: ${window.location.href}`,
    },
    params: { REGISTER_SONET_EVENT: 'Y' },
  });
}
