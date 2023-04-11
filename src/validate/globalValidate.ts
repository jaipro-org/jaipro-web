export const validateState = (value: any, error: any) => {
  if (value === undefined && error === undefined) return null;
  else if (error) return false;
  return true;
};

export const validateStateColor = (value: any, error: any) => {
  if (value === undefined && error === undefined)
    return "border-color: #7e7e7e";
  else if (error) return "color: #dc3545; border-color: #dc3545;";
  return "color: #198754; border-color: #198754;";
};