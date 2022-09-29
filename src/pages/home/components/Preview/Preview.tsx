import { useEffect } from 'react';
import { SickType } from 'types/api/sick.type';
import * as Styled from './Style';

const SearchPreview = ({
  list,
  keyword,
  currentList,
  previewIndex,
  setPreviewIndex,
  previewShowLimit,
  setPreviewShowLimit,
}: any) => {
  const onMorePreviewSearch = (): void => {
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
        {list.map((item: SickType, index: number) => {
          if (index > previewShowLimit) return;
          if (keyword !== '' && item.sickNm.includes(keyword)) {
            const KeywordPoint = item.sickNm.split(new RegExp(`(${keyword})`, 'gi'));
            return (
              <Styled.Item key={item.sickCd} active={index + 1 === previewIndex}>
                {KeywordPoint.map((point: string, i: number) =>
                  point.toLowerCase() === keyword.toLowerCase() ? (
                    <span key={i}>{point}</span>
                  ) : (
                    point
                  ),
                )}
              </Styled.Item>
            );
          }
        })}
        {list.length > previewShowLimit && (
          <Styled.MoreBtn onClick={onMorePreviewSearch}>더 보기 ...</Styled.MoreBtn>
        )}
      </Styled.List>
      <p>최근 검색어</p>
      <Styled.Current>
        {currentList && currentList.length > 0 ? (
          currentList.map((keyword: string, index: number) => <span key={index}>{keyword}</span>)
        ) : (
          <>
            <p>최근 검색어가 없습니다.</p>
          </>
        )}
      </Styled.Current>
    </Styled.Wrapper>
  ) : null;
};
export default SearchPreview;
