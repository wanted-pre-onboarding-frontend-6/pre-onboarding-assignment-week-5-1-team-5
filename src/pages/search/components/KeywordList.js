function KeywordList({ recommendKeywords }) {
  return (
    <>
      <div>추천 검색어</div>

      {recommendKeywords.map((keyword) => (
        <div key={keyword.sickCd}>{keyword.sickNm}</div>
      ))}
    </>
  );
}

export default KeywordList;
