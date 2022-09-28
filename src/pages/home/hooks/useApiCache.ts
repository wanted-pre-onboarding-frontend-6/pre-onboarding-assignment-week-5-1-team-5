import { useState } from 'react';

type useApiCacheType = {
  params: string;
  api: any;
  path: string;
  name: string;
};

const useApiCache = async ({ params, api, path, name }: useApiCacheType) => {
  const [item, setItem] = useState([]);

  const cacheStore = await caches.open(path);
  const cache = await cacheStore.match(name);
  if (cache) {
    name;
    const cacheData = await cache.json();
    return setItem(cacheData);
  }
  try {
    const response = await api({ params });
    const data = await response.data;
    await cacheStore.put(name, new Response(JSON.stringify(data)));
    setItem(data);
  } catch (err) {
    console.log(err);
  }

  return [item, setItem];
};
export default useApiCache;
