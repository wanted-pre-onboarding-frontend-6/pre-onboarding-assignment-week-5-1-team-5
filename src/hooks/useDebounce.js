export const debounce = (callback) => {
  const debounce = setTimeout(callback, 300);
  return () => clearTimeout(debounce);
};
