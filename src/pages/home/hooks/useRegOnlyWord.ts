import { useEffect, useState } from 'react';

const useRegOnlyWord = (word: string) => {
  const [regWord, setRegWord] = useState<string>('');

  useEffect(() => {
    const isWord = /[ㄱ-ㅎ-ㅏ-ㅣ]/;
    let onlyWord = word;

    for (const key of word) {
      if (isWord.test(key)) {
        onlyWord = onlyWord.replace(key, '');
        setRegWord(onlyWord);
      }
    }

    setRegWord(onlyWord);
  }, [word]);

  return regWord;
};
export default useRegOnlyWord;
