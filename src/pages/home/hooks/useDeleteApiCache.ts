import { useEffect } from 'react';

const useDeleteApiCache = (cacheName: string) => {
  useEffect(() => {
    return () => {
      caches.keys().then((names) => {
        for (let name of names) {
          if (name === cacheName) {
            caches.delete(name);
          }
        }
      });
    };
  }, []);
};
export default useDeleteApiCache;
