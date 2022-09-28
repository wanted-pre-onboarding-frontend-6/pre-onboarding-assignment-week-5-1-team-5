const writeToCache = (key, data) => localStorage.setItem(key, data);

const readFromCache = (key) => JSON.parse(localStorage.getItem(key));

export { writeToCache, readFromCache };
