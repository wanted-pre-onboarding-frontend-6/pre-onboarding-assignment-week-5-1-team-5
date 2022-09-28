import { useEffect, useState } from "react";
import { getRecommendKeywords } from "../../api/search";
import { KEYWORD } from "../../constants/localStorge";
import { debounce } from "../../hooks/useDebounce";
import { readFromCache, writeToCache } from "../../utils/cache/localStorge";
import KeywordList from "./components/KeywordList";
import { checkCached } from "../../hooks/useCheckCached";

writeToCache(KEYWORD, JSON.stringify({}));

function Search() {
  const [keyword, setKeyword] = useState("");
  const [recommendKeywords, setRecommendKeywords] = useState([]);
  const pattern = /([^가-힣\x20])/i;

  const getKeywordList = async (keyword) => {
    if (keyword.length === 0) return;
    const cachedKeywords = readFromCache(KEYWORD);
    if (checkCached(cachedKeywords, keyword))
      return setRecommendKeywords(cachedKeywords[keyword]);
    // if (pattern.test(keyword)) return;

    try {
      console.log("캐시 없음");
      const response = await getRecommendKeywords(keyword);
      if (response.data.length === 0) return setRecommendKeywords([]);

      console.log("response", response);
      cachingResult(cachedKeywords, keyword, response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangekeywordHandler = (e) => {
    const { value } = e.target;
    if (value.length === 0) return;
    setKeyword(value);
  };

  const cachingResult = (cachedData, key, value) => {
    const newKeywords = { ...cachedData, [key]: value };
    writeToCache(KEYWORD, JSON.stringify(newKeywords));
    setRecommendKeywords(value);
  };

  useEffect(() => {
    debounce(getKeywordList(keyword));
  }, [keyword]);

  return (
    <>
      <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <input
        placeholder="질환명을 입력해주세요."
        onChange={onChangekeywordHandler}
      />
      {recommendKeywords && (
        <KeywordList recommendKeywords={recommendKeywords} keyword={keyword} />
      )}
    </>
  );
}

export default Search;
