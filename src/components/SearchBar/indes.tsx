import React from 'react';
import { useRecoilState } from 'recoil';
import { textState, dataState, recommendTextState } from 'atom/atom';

export default function SearchBar() {
  const [text, setText] = useRecoilState(textState);
  const [data, setData] = useRecoilState(dataState);
  const [recommendText, setRecommendText] = useRecoilState(recommendTextState);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>
        국내 모든 임상실험 검색하고<br></br>
        온라인으로 참여하기
      </h2>
      <div>
        <div>
          <input
            type="search"
            placeholder="질환명을 입력해 주세요."
            value={text}
            onChange={onChangeText}
          />
          <button>검색</button>
        </div>
      </div>
    </div>
  );
}
