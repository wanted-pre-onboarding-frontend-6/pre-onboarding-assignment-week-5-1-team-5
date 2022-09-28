const KEYWORD_REPOSITORY_KEY = 'currentKeyword';
const KeywordRepositroy = {
  setKeywords: (keyword: any) => {
    const curretkeyword = JSON.parse(localStorage.getItem(KEYWORD_REPOSITORY_KEY) as string);
    if (curretkeyword.length === 5) {
      let newKeyword = [...curretkeyword];
      newKeyword = newKeyword.shift();
      newKeyword.push({
        code: keyword.sickCd,
        name: keyword.sickNm,
      });
    }
  },

  getKeywords: () => {
    return JSON.parse(localStorage.getItem(KEYWORD_REPOSITORY_KEY) as string);
  },

  removeKeywords: () => {},
};
export default KeywordRepositroy;
