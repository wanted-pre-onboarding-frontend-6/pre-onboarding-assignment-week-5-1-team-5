import sickApi from 'apis/sick/sickApi';
import { useCallback, useEffect, useState } from 'react';
import { SickType } from 'types/api/sick.type';

type useApiCacheType = {
  params?: any;
  cacheName: string;
  cacheKey: string;
};

const useSickApiCache = ({ params, cacheName, cacheKey }: useApiCacheType) => {
  const [item, setItem] = useState<any>([]);

  const apiCache = useCallback(
    async (cacheName: string, cacheKey: string) => {
      const cacheStore = await caches.open(cacheName as string);
      const cache = await cacheStore.match(cacheKey);
      if (cache) {
        const cacheData = await cache.json();
        return setItem(cacheData);
      }
      try {
        const response = await sickApi.getSickList({ params });
        const data = await response.data;
        await cacheStore.put(cacheKey, new Response(JSON.stringify(data)));
        setItem(data);
      } catch (err) {
        console.error(err);
      }
    },
    [cacheKey],
  );

  useEffect(() => {
    if (!cacheKey) return setItem([]);
    apiCache(cacheName, cacheKey);
  }, [cacheKey]);

  return [item, setItem];
};
export default useSickApiCache;
