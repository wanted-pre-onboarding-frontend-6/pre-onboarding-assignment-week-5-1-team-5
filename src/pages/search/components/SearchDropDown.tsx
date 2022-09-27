import React from 'react';
import styled from 'styled-components';

export default function SearchDropDown({ setIsFocus }: SearchDropDownProps) {
  return (
    <Container onFocus={() => setIsFocus(true)}>
      <RecentContainer>
        <Title>최근 검색어</Title>
        <ol>
          <RecentText>야호</RecentText>
          <RecentText>야호</RecentText>
          <RecentText>야호</RecentText>
          <RecentText>야호</RecentText>
          <RecentText>야호</RecentText>
        </ol>
      </RecentContainer>
      <hr />
      <RecommendContaniner>
        <Title>추천 검색어로 검색해보세요</Title>
        <ul>
          <RecommendText>추천</RecommendText>
          <RecommendText>추천</RecommendText>
          <RecommendText>추천</RecommendText>
          <RecommendText>추천</RecommendText>
          <RecommendText>추천</RecommendText>
        </ul>
      </RecommendContaniner>
    </Container>
  );
}

interface SearchDropDownProps {
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  margin-top: 10px;
  background-color: white;
  border-radius: 20px;

  ol {
    display: flex;
  }
  hr {
    background-color: ${props => props.theme.palette.gray100};
    height: 2px;
    margin-top: 5px;
    border: none;
  }
  ul {
    display: flex;
  }
`;

const RecentContainer = styled.div`
  padding-left: 20px;
  padding-top: 10px;
`;
const Title = styled.h1`
  font-size: 15px;
  color: ${props => props.theme.palette.gray500};
`;

const RecentText = styled.li`
  font-size: 16px;
  margin-right: 5px;

  :hover {
    background-color: ${props => props.theme.palette.gray100};
  }
`;

const RecommendContaniner = styled(RecentContainer)``;

const RecommendText = styled(RecentText)`
  margin-bottom: 10px;
`;
