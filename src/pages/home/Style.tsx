import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: #cae9ff;
`;

export const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 500px;
  height: 100%;
  margin: 0 auto;
`;
