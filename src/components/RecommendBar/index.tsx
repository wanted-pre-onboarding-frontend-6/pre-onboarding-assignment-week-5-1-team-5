import { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { textState, dataState, recommendTextState } from 'atom/atom';
import searchApi from '../../apis/searchApi';
import HilightingText from '../HilightingText';

interface DataProps {
  sickCd: string;
  sickNm: string;
}

export default function RecommendBar() {
  const [text, setText] = useRecoilState(textState);
  const [data, setData] = useRecoilState(dataState);
  const [recommendText, setRecommendText] = useRecoilState(recommendTextState);

  // useEffect(() => {
  //   // axios.get(`http://localhost:4000/sick?q=${text}`).then((res) => {
  //   //   if (res.status === 200 && text !== '') {
  //   //     setData(res.data);
  //   //     console.info('calling API');
  //   //   }
  //   // });
  //   searchApi.getSearchList(text).then((res) => {
  //     if (res && text !== '') {
  //       setData(res);
  //     }
  //   });
  // }, [text]);

  // console.log(data);

  const cacheApi = useCallback(
    async (text: string) => {
      const cacheStore = await caches.open('search-api');
      const cache = await cacheStore.match(text);
      if (cache) {
        const cacheData = await cache.json();
        return setData(cacheData);
      }
      try {
        const response = await searchApi.getSearchList(text);
        console.log('api...');
        const data = await response;
        await cacheStore.put(text, new Response(JSON.stringify(data)));
        setData(data);
      } catch (e) {
        console.log(e);
      }
    },
    [text],
  );

  useEffect(() => {
    if (text.length <= 0) return setData([]);
    let searchText = text;
    const isWord = /[ㄱ-ㅎ-ㅏ-ㅣ]/;

    for (const key of text) {
      if (isWord.test(key)) {
        searchText = searchText.replace(key, '');
      }
    }
    if (searchText === '') return;
    cacheApi(text);
  }, [text]);

  return (
    <div>
      <p>추천 검색어</p>
      <ul>
        {data?.map((sick: DataProps, index: number) => (
          <HilightingText key={index} keyword={sick.sickNm} text={text}></HilightingText>
        ))}
      </ul>
    </div>
  );
}
