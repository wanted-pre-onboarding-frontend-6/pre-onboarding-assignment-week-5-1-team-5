import useInput from 'hooks/useInput';
import { useEffect, useState } from 'react';
import * as Styled from './Style';
import { useCallback } from 'react';
import SickApi from 'apis/sick/sickApi';
import SearchPreview from './Preview/Preview';

const HomeSearch = () => {
  // Search KeyWord state
  const [keyword, onChageKeyword, setKeyword] = useInput('');
  const [previewIndex, setPreviewIndex] = useState<number>(0);
  const [previewShowLimit, setPreviewShowLimit] = useState<number>(5);

  // Search List state
  const [list, setList] = useState<any>([]);

  // Cache API
  const apiCahce = useCallback(
    async (keyword: string) => {
      const cacheStore = await caches.open('search-api-cache');
      const cache = await cacheStore.match(keyword);
      if (cache) {
        const cacheData = await cache.json();
        return setList(cacheData);
      }
      try {
        const response = await SickApi.getSickList({ params: { q: keyword } });
        console.log('api...');
        const data = await response.data;
        await cacheStore.put(keyword, new Response(JSON.stringify(data)));
        setList(data);
      } catch (err) {
        console.log(err);
      }
    },
    [keyword],
  );

  // onChnage keyword
  useEffect(() => {
    if (keyword.length <= 0) return setList([]);
    let serarchKeyword = keyword;
    const isWord = /[ㄱ-ㅎ-ㅏ-ㅣ]/;

    for (const key of keyword) {
      if (isWord.test(key)) {
        serarchKeyword = serarchKeyword.replace(key, '');
      }
    }
    if (serarchKeyword === '') return;
    apiCahce(serarchKeyword);
  }, [keyword]);

  // delete cache API
  useEffect(() => {
    return () => {
      caches.keys().then((names) => {
        for (let name of names) caches.delete(name);
      });
    };
  }, []);

  // onChnage preview index
  const onSelectPreview = (e: any) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'ArrowDown') {
      if (previewIndex > previewShowLimit) return;
      return setPreviewIndex((prev: number) => prev + 1);
    }
    if (e.key === 'ArrowUp') {
      if (previewIndex === 0) return;
      return setPreviewIndex((prev: number) => prev - 1);
    }

    if (e.key === 'Enter') {
      setPreviewIndex(0);
      setKeyword(list[previewIndex - 1].sickNm);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Input value={keyword} onChange={onChageKeyword} onKeyDown={onSelectPreview} />
        <button>검색</button>
      </Styled.Container>
      <SearchPreview
        list={list}
        previewIndex={previewIndex}
        setPreviewIndex={setPreviewIndex}
        previewShowLimit={previewShowLimit}
        setPreviewShowLimit={setPreviewShowLimit}
      />
    </Styled.Wrapper>
  );
};
export default HomeSearch;
