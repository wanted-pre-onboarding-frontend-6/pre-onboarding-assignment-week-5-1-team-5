import { useEffect } from 'react';
import { useState } from 'react';
import * as Styled from './Style';

const SearchPreview = ({
  list,
  previewIndex,
  setPreviewIndex,
  previewShowLimit,
  setPreviewShowLimit,
}: any) => {
  const onMorePreviewSearch = () => {
    setPreviewShowLimit((prev: number) => prev + 5);
  };

  useEffect(() => {
    setPreviewShowLimit(5);
    setPreviewIndex(0);
  }, [list]);

  return list.length > 0 ? (
    <Styled.Wrapper>
      <p>추천 검색어</p>
      <Styled.List>
        {list.map((item: any, index: number) => {
          if (index > previewShowLimit) return;
          return (
            <Styled.Item key={item.sickCd} active={index + 1 === previewIndex}>
              {item.sickNm}
            </Styled.Item>
          );
        })}
        {list.length > previewShowLimit && (
          <Styled.MoreBtn onClick={onMorePreviewSearch}>더 보기 ...</Styled.MoreBtn>
        )}
      </Styled.List>
      <p>최근 검색어</p>
    </Styled.Wrapper>
  ) : null;
};
export default SearchPreview;
