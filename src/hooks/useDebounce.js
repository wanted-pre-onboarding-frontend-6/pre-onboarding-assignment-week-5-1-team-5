export default function debounceEffect(callback, deps) {
  const debounce = setTimeout(() => {
    return callback(deps);
  }, 300);
  return () => clearTimeout(debounce);
}
