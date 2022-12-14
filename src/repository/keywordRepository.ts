const KEYWORD_REPOSITORY_KEY = 'currentKeyword';
const KeywordRepositroy = {
  setKeywords: (keyword: string) => {
    let existingKeywords = false;
    const curretkeyword = JSON.parse(localStorage.getItem(KEYWORD_REPOSITORY_KEY) as string);
    if (curretkeyword) {
      for (let i = 0; i < curretkeyword.length; i++) {
        if (curretkeyword[i] === keyword) {
          existingKeywords = true;
          const newKeyword = curretkeyword.filter((item: any) => item !== keyword);
          newKeyword.unshift(keyword);
          return localStorage.setItem(KEYWORD_REPOSITORY_KEY, JSON.stringify(newKeyword));
        }
      }

      if (existingKeywords) return;

      if (curretkeyword.length === 5) {
        const newKeyword = [...curretkeyword];
        newKeyword.pop();
        newKeyword.unshift(keyword);
        return localStorage.setItem(KEYWORD_REPOSITORY_KEY, JSON.stringify(newKeyword));
      }

      const newKeyword = [...curretkeyword];
      newKeyword.unshift(keyword);
      return localStorage.setItem(KEYWORD_REPOSITORY_KEY, JSON.stringify(newKeyword));
    } else {
      const newKeyword = [keyword];
      return localStorage.setItem(KEYWORD_REPOSITORY_KEY, JSON.stringify(newKeyword));
    }
  },

  getKeywords: () => {
    return JSON.parse(localStorage.getItem(KEYWORD_REPOSITORY_KEY) as string);
  },

  removeKeywords: (keyword: string) => {
    const curretkeyword = JSON.parse(localStorage.getItem(KEYWORD_REPOSITORY_KEY) as string);
    const newKeyword = curretkeyword.filter((item: any) => item !== keyword);
    return localStorage.setItem(KEYWORD_REPOSITORY_KEY, JSON.stringify(newKeyword));
  },
};
export default KeywordRepositroy;
