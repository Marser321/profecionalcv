export const getValue = (obj, path) => {
  if (!obj || !path) return null;
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return null;
  }, obj);
};
