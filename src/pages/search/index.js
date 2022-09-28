import { useEffect, useState } from "react";
import { getRecommendKeywords } from "../../api/search";
import { KEYWORD } from "../../constants/localStorge";
import debounceEffect from "../../hooks/useDebounce";
import { readFromCache, writeToCache } from "../../utils/cache/localStorge";
import KeywordList from "./components/KeywordList";
import { checkCached } from "../../hooks/useCheckCached";
import styled from "styled-components";

writeToCache(KEYWORD, JSON.stringify({}));

function Search() {
  const [keyword, setKeyword] = useState("");
  const [recommendKeywords, setRecommendKeywords] = useState([]);
  const [index, setIndex] = useState(0);
  const [focus, setFocus] = useState(false);
  const pattern = /[ㄱ-ㅎ-ㅏ-ㅣ]/;

  const getKeywordList = async (keyword) => {
    if (pattern.test(keyword)) return;
    if (keyword.length === 0) return;

    const cachedList = readFromCache(KEYWORD);
    if (checkCached(cachedList, keyword))
      return setRecommendKeywords(cachedList[keyword]);

    try {
      const { data } = await getRecommendKeywords(keyword);
      if (data.length === 0) return setRecommendKeywords([]);
      cachingResult(cachedList, keyword, data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangekeywordHandler = (e) => {
    const { value } = e.target;
    if (value.length === 0) return;
    if (pattern.test(keyword) === false) {
      setRecommendKeywords([]);
    }
    setKeyword(value);
  };

  const cachingResult = (cachedData, key, value) => {
    const newKeywords = { ...cachedData, [key]: value };
    writeToCache(KEYWORD, JSON.stringify(newKeywords));
    setRecommendKeywords(value);
  };

  const useKeyboardFocus = (e) => {
    const { key } = e;

    if (key === "ArrowDown") {
      setIndex(index + 1);
    } else if (key === "ArrowUp") {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    debounceEffect(getKeywordList, keyword);
  }, [keyword]);

  console.log(keyword.length);

  return (
    <Container>
      <Title>국내 모든 임상시험 검색하고 온라인으로 참여하기</Title>
      <SearchWrapper>
        <Input
          placeholder="질환명을 입력해주세요."
          onChange={onChangekeywordHandler}
          onKeyDown={useKeyboardFocus}
          onFocus={() => setFocus(true)}
        />
        <Button>검색</Button>
        {focus && (
          <SearchResult>
            <div>추천 검색어</div>
            {keyword === "" ? (
              <div>검색어 없음</div>
            ) : (
              <KeywordList
                recommendKeywords={recommendKeywords}
                search={keyword}
                index={index}
              />
            )}
          </SearchResult>
        )}
      </SearchWrapper>
    </Container>
  );
}

export default Search;

const Container = styled.section`
  background: #cae9ff;
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: xx-large;
  text-align: center;
  padding: 40px;
`;

const SearchWrapper = styled.div`
  margin: 0 auto;
`;

const SearchResult = styled.div`
  margin-top: 10px;
  background: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 20px;
  width: 400px;
  border: none;
  border-radius: 10px;
  outline-color: #369efc;
`;

const Button = styled.button`
  width: 60px;
  height: 55px;
  color: white;
  margin-left: 10px;
  border-radius: 10px;
  background: #369efc;
  font-size: 16px;
  border: none;
`;
