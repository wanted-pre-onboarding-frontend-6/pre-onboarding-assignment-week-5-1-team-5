const writeToCache = (key, data) => sessionStorage.setItem(key, data);

const readFromCache = (key) => JSON.parse(sessionStorage.getItem(key));

export { writeToCache, readFromCache };
