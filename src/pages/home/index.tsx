import HomeBanner from './components/Banner/Banner';
import HomeSearch from './components/Search/Search';
import * as Styled from './Style';

const HomePage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <HomeBanner />
        <HomeSearch />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default HomePage;
