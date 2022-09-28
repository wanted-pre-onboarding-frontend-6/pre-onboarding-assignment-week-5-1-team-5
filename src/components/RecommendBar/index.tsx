import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { textState, dataState, recommendTextState } from 'atom/atom';

interface DataProps {
  sickCd: string;
  sickNm: string;
}

export default function RecommendBar() {
  const [text, setText] = useRecoilState(textState);
  const [data, setData] = useRecoilState(dataState);
  const [recommendText, setRecommendText] = useRecoilState(recommendTextState);

  useEffect(() => {
    axios.get(`http://localhost:4000/sick?q=${text}`).then((res) => {
      if (res.status === 200 && text !== '') {
        setData(res.data);
        console.info('calling API');
      }
    });
  }, [text]);

  // console.log(data);

  const HilightingText = ({ keyword, text }: { keyword: string; text: string }) => {
    return keyword.includes(text) && text !== '' ? (
      <li>
        {keyword.split(text)[0]}
        <span style={{ fontWeight: 'bold' }}>{text}</span>
        {keyword.split(text)[1]}
      </li>
    ) : (
      <li>{keyword}</li>
    );
  };

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
