import styled from 'styled-components';
type StyleProps = {
  active: boolean;
};

export const Wrapper = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 2rem 0 0 0;
  margin-top: 0.5rem;
  border-radius: 1.5rem;
  position: absolute;

  & > p {
    color: #999;
    padding: 0 1rem;
  }
`;

export const List = styled.ul`
  & > li:last-child {
    border-radius: 0 0 1.5rem 1.5rem;
  }
`;

export const MoreBtn = styled.li`
  width: 100%;
  padding: 1.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }
`;

export const Item = styled.li<StyleProps>`
  width: 100%;
  padding: 1.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  ${({ active }) => active && 'background-color: #f2f2f2;'};
`;
