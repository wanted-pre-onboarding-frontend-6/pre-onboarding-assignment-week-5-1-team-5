import styled from "styled-components";

function KeywordList({ recommendKeywords, search, index }) {
  const sliceKeywords = recommendKeywords.slice(0, 5);

  return (
    <>
      {sliceKeywords.map((keywordItem, idx) => {
        const keyword = keywordItem.sickNm;
        const searchIndex = keyword.indexOf(search);
        const prevSearch = keyword.slice(0, searchIndex);
        const nextSearch = keyword.slice(searchIndex + 1);

        return (
          <Container key={idx} isFocus={index === idx}>
            <span>{prevSearch}</span>
            <SearchText>{search}</SearchText>
            <span>{nextSearch}</span>
          </Container>
        );
      })}
    </>
  );
}

export default KeywordList;

const Container = styled.div`
  background: ${({ isFocus }) => isFocus && "#f5f5f5"};
`;

const SearchText = styled.span`
  font-weight: bold;
`;
