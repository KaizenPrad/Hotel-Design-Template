export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
export const PHONE_PATTERN = /^[+()\d\s.-]{7,20}$/;

export function validateEmail(value) {
  if (!value.trim()) return "Please enter your email address.";
  if (!EMAIL_PATTERN.test(value.trim())) return "Please enter a valid email address.";
  return "";
}

export function validatePhone(value, required = false) {
  if (!value.trim()) return required ? "Please enter your phone number." : "";
  if (!PHONE_PATTERN.test(value.trim())) return "Please enter a valid phone number.";
  return "";
}

export function validateRequired(value, label) {
  if (!value || !value.trim()) return `${label} is required.`;
  return "";
}
