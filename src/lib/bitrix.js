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
  // Safety redundancy — human-readable brief in COMMENTS
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
      // Custom CRM fields
      UF_CRM_LEAD_1774534738299: formData.investment_budget,          // Investment Budget
      UF_CRM_LEAD_1774534216919: formData.investment_goal,            // Investment Goal
      UF_CRM_1774618391777: formData.property_interest,               // Listing Reference
      UF_CRM_1772137811136: '66',                                      // Lead type — Buyer/Investor
      COMMENTS: comments,
    },
    params: { REGISTER_SONET_EVENT: 'Y' },
  });
}

// 🌐 RECRUITMENT SPA ENDPOINT GENERATOR
function getBitrixRecruitmentUrl() {
  const baseUrl = import.meta.env.VITE_BITRIX_RECRUITMENT_WEBHOOK_URL;
  if (!baseUrl) return null;
  // ✅ Changed back to standard native crm.item.add method
  return `${baseUrl.replace(/\/?$/, '/')}crm.item.add.json`;
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
  return postToBitrixRecruitment({
    entityTypeId: 1038,
    fields: {
      title: `New Applicant: ${applicantData.full_name}`,
      ufCrm8_1772192069412: applicantData.phone,
      ufCrm8_1772192889128: applicantData.email,
      ufCrm8_1772192916887: applicantData.address,
      ufCrm8_1772192939863: applicantData.job_title,
      ufCrm8_1772192959631: applicantData.nationality,
      ufCrm8_1772193001136: applicantData.joining_date,
      ufCrm8_1772193012616: applicantData.dob,
      ufCrm8_1772193028487: applicantData.preferred_name,
      ufCrm8_1772193037231: applicantData.area_of_residency,
      ufCrm8_1772193061103: applicantData.joining_status === 'Yes' ? '326' : '328',
      ufCrm8_1772193100078: applicantData.graduation_year,
      ufCrm8_1772193111039: applicantData.work_experience,
      ufCrm8_1772193150190: applicantData.has_re_experience === 'Yes' ? '330' : '332',
      ufCrm8_1772194127805: applicantData.gender === 'Male' ? '416' : '418',
      ufCrm8_1774869698: applicantData.linkedin,
      ufCrm8_1774950629779: applicantData.current_dubai_role,
      ufCrm8_1774950641068: applicantData.re_years_exp,
      ufCrm8_1774950651350: applicantData.current_brokerage,
      ufCrm8_1776858189: applicantData.notes,
    },
  });
}

export async function sendPropertyViewingToBitrix(viewingData) {
  // Safety redundancy — human-readable brief in COMMENTS
  const comments = `Property Name: ${viewingData.property_title}\nProperty Reference: ${viewingData.property_id || 'Not specified'}\nAssigned Agent: ${viewingData.assigned_agent_name || 'Unassigned'}\nSubmitted from: ${window.location.href}`;

  return postToBitrix({
    fields: {
      TITLE: `Website Property Inquiry: ${viewingData.property_title}`,
      NAME: viewingData.full_name,
      PHONE: [{ VALUE: viewingData.phone, VALUE_TYPE: 'WORK' }],
      EMAIL: [{ VALUE: viewingData.email, VALUE_TYPE: 'WORK' }],
      SOURCE_ID: 'WEB',
      ASSIGNED_BY_ID: FALLBACK_ASSIGNED_BY_ID,
      // Custom CRM fields
      UF_CRM_1772139089925: viewingData.property_id,                  // Property Reference
      UF_CRM_1772139069211: window.location.href,                      // Property Link (submission URL)
      COMMENTS: comments,
    },
    params: { REGISTER_SONET_EVENT: 'Y' },
  });
}