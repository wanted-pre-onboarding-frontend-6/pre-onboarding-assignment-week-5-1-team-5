import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import SearchDropDown from './SearchDropDown';

export default function Search() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchValue, searchValueHandler, deleteValueHanler] = useInput('');

  return (
    <Container>
      <Title>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </Title>
      <SearchBarContainer>
        <SearchBar
          type="text"
          placeholder="질환명을 입력해 주세요."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={searchValue}
          onChange={e => searchValueHandler(e)}
        />
        <SearchBtn>검색</SearchBtn>
        <TextDeleteBtn onClick={deleteValueHanler}>X</TextDeleteBtn>
        {isFocus && <SearchDropDown setIsFocus={setIsFocus} />}
      </SearchBarContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.palette.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 50%;
  text-align: center;
  margin-top: 60px;
  font-size: ${props => props.theme.fontSize.xLarge};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

const SearchBarContainer = styled.div`
  width: 50%;
  margin-top: 50px;
  position: relative;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 80px;
  border-radius: 42px;
  border: none;
  text-indent: 30px;
  font-size: ${props => props.theme.fontSize.large};

  :focus {
    border: 2px solid ${props => props.theme.palette.subColor};
  }
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.palette.subColor};
  border-radius: 30px;
  position: absolute;
  right: 3%;
  top: 15px;
`;

const TextDeleteBtn = styled.button`
  position: absolute;
  right: 13%;
  top: 30px;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.palette.grey500};
  border-radius: 20px;
  font-size: 12px;
`;
