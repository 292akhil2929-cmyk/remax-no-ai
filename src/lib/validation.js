export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  // Accepts: +971501234567, 0501234567, 971501234567 — min 7, max 15 digits
  const digits = phone.replace(/[\s\-\+\(\)]/g, '');
  return /^\d{7,15}$/.test(digits);
}

export function isValidName(name) {
  if (!name || typeof name !== 'string') return false;
  return name.trim().length >= 2;
}

export function isValidPrice(price) {
  if (price === '' || price == null) return false;
  const num = Number(price);
  return !Number.isNaN(num) && num > 0;
}

export function getFieldError(field, value, label) {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${label} is required`;
  }

  switch (field) {
    case 'email':
      if (!isValidEmail(value)) return 'Please enter a valid email address';
      break;
    case 'phone':
      if (!isValidPhone(value)) return 'Please enter a valid phone number';
      break;
    case 'name':
      if (!isValidName(value)) return 'Name must be at least 2 characters';
      break;
    case 'price':
      if (!isValidPrice(value)) return 'Please enter a valid amount';
      break;
  }
  return null;
}
