import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const Form = styled.form`
  position: relative;
  & > button {
    position: absolute;
    background-color: blue;
    color: #fff;
    width: 3rem;
    height: 3rem;
    right: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  background-color: #fff;
  border-radius: 2rem;
  padding: 1.5rem 5rem 1.5rem 3rem;
`;
