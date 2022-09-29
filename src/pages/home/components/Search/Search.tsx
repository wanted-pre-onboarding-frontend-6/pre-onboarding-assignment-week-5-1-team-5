import useInput from 'hooks/useInput';
import { FormEvent, useEffect, useState } from 'react';
import * as Styled from './Style';
import SearchPreview from '../Preview/Preview';
import useRegOnlyWord from 'pages/home/hooks/useRegOnlyWord';
import useSickApiCache from 'pages/home/hooks/useSickApiCache';
import useDeleteApiCache from 'pages/home/hooks/useDeleteApiCache';
import KeywordRepositroy from 'repository/keywordRepository';

const HomeSearch = () => {
  // chache name consts
  const CACHE_NAME = 'searchCache';

  // search KeyWord state
  const [keyword, onChageKeyword, setKeyword] = useInput('');
  const [previewIndex, setPreviewIndex] = useState<number>(0);
  const [previewShowLimit, setPreviewShowLimit] = useState<number>(5);
  const [currentList, setCurrentList] = useState<Array<string>>([]);

  useEffect(() => {
    const currentKeyword: Array<string> = KeywordRepositroy.getKeywords();
    setCurrentList(currentKeyword);
  }, []);

  // regexp keyword test onlyWord(ㄱ-ㅎ, ㅏ-ㅣ)
  const searchKeyword: string = useRegOnlyWord(keyword);

  // sick search api cache
  const [searchList] = useSickApiCache({
    params: { q: searchKeyword },
    cacheName: CACHE_NAME,
    cacheKey: searchKeyword,
  });

  // delete cache
  useDeleteApiCache(CACHE_NAME);

  // handler onchage preview index
  const onSelectPreview = (e: KeyboardEvent | any) => {
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
      setKeyword(searchList[previewIndex - 1].sickNm);
    }
  };

  //hander submit keyword
  const onSubmitKeyword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === '') return;
    KeywordRepositroy.setKeywords(keyword);
    const currentKeyword = KeywordRepositroy.getKeywords();
    setCurrentList(currentKeyword);
    alert('검색어 : ' + keyword);
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={onSubmitKeyword}>
        <Styled.Input value={keyword} onChange={onChageKeyword} onKeyDown={onSelectPreview} />
        <button>검색</button>
      </Styled.Form>
      <SearchPreview
        list={searchList}
        keyword={searchKeyword}
        currentList={currentList}
        setCurrentList={setCurrentList}
        previewIndex={previewIndex}
        setPreviewIndex={setPreviewIndex}
        previewShowLimit={previewShowLimit}
        setPreviewShowLimit={setPreviewShowLimit}
      />
    </Styled.Wrapper>
  );
};
export default HomeSearch;
