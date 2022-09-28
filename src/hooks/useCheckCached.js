export const checkCached = (cachedData, value) => {
  if (Object.keys(cachedData).includes(value)) {
    console.log("이미 캐시됨");
    return true;
  } else return false;
};
