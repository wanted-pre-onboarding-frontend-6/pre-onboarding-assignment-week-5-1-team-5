# 검색창

## 📌 프로젝트 소개

### 목표
검색창 구현 + 검색어 추천 기능 구현

### 개발 기간
`2022/09/27 ~ 2022/09/29`

<br/>

## 📌 배포

(링크 넣기)

<br />

## 📌 프로젝트 설치 및 시작

#### 프로젝트 클론

```shell
$ git clone https://github.com/wanted-pre-onboarding-frontend-6/pre-onboarding-assignment-week-5-1-team-5.git
```

#### 패키지 설치

```shell
$ npm install
```

#### 서버 실행

```shell
$ npm start
```

<br/>

## 📌 팀원 소개

<br/>

<table align="center">
<tr >
<td align="center"><a href="https://github.com/LoggingCo"><img  src="https://avatars.githubusercontent.com/LoggingCo" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/sming0112"><img src="https://avatars.githubusercontent.com/sming0112" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/YSBINN"><img src="https://avatars.githubusercontent.com/YSBINN" width="100%" height="50%" /></a></td>
<td align="center"><a href="https://github.com/Leejha"><img src="https://avatars.githubusercontent.com/Leejha" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/seriparkdev"><img src="https://avatars.githubusercontent.com/seriparkdev" width="100%"  height="50%"/></a></td>
</tr>
<tr>
<td align="center"><b>김성용(팀장)</b></td>
<td align="center"><b>성민규</b></td>
<td align="center"><b>임상빈</b></td>
<td align="center"><b>이재하</b></td>
<td align="center"><b>박세리</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

<br/>

## 📌프로젝트 과정 소개

- [Git 전략](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/Git-%EC%A0%84%EB%9E%B5)

- [커밋 컨벤션 및 코딩 컨벤션](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EB%B0%8F-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)


<br/>

## 📌 프로젝트 구조

<details>
<summary>open</summary>

```
├─apis
│  └─sick
├─hooks
├─pages
│  └─home
│      ├─components
│      │  ├─Banner
│      │  ├─Preview
│      │  └─Search
│      └─hooks
├─repository
├─styles
├─types
│  ├─api
│  └─style
└─__test__
```

</details>

<br/>

## 📌기술 스택
 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br/>

## 📌 요구 사항
- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
    - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
        - 예)
            - 사용자 입력: 담낭
            추천 검색어:  **담낭**의 악성 신생물, **담낭**염, **담낭**의 기타 질환, 달리 분류된 질환에서의 **담낭**, 담도 및 췌장의 장애
    - 검색어가 없을 시 “검색어 없음” 표출
- API 호출 최적화
    - API 호출별로 로컬 캐싱 구현
        - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
        - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
    - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
        - README에 전략에 대한 설명 기술
    - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
    - 사용법 README에 기술

<br/>

## 💡 요구 사항 구현

- 질환면 검색시 API 호출 통해서 검색어 추천 기능 구현
    - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
        - split과 map을 활용한 서비스 로직 구현
```
          if (keyword !== '' && item.sickNm.includes(keyword)) {
            const KeywordPoint = item.sickNm.split(new RegExp(`(${keyword})`, 'gi'));
```

    - 검색어가 없을 시 '검색어 없음' 표출
        - 고객의 편의성을 위하여 추천 검색어 리스트가 없을 시 추천 검색어 리스트를 보여주지 않도록 수정

- API 호출 최적화
    - javascript의 cache api를 활용하여 cache storage를 이용한 로컬 캐싱
    - cache api는 http request의 response를 저장하기 위한 웹스토리지이며, 네트워크 연결이 없어도 사용이 가능
    - cache api에 response를 저장 후 동일한 key가 cache storege에 입력되면 저장되어있던 데이터 사용
    - 자음 모음 입력 시 불필요한 api 호출을 막기 위하여 정규표현식 검사를 통한 API 호출 최적화 진행
     
```
      const cacheStore = await caches.open(cacheName as string);
      const cache = await cacheStore.match(cacheKey);
      if (cache) {
        const cacheData = await cache.json();
        return setItem(cacheData);
      }
```     
```
    const isWord = /[ㄱ-ㅎ-ㅏ-ㅣ]/;
    let onlyWord = word;

    for (const key of word) {
      if (isWord.test(key)) {
        onlyWord = onlyWord.replace(key, '');
        setRegWord(onlyWord);
      }
    }
```

- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
    - keyDown evnet를 통한 이동 기능 구현
    - input이 활성화 된 상태에서 방향키 ↑,↓ 입력 시 index를 변경하여 이동할 수 있도록 구현
    - Enter 입력 시 로컬 스토리지를 이용하여 최근 검색어 기능 구현, (최근 검색어 제한 5개, 중복 검색어 검색 시 최근 검색어 맨앞으로 )


<br/>

## 📌 Best Practice
- sessiotn storeage vs cahce api
    - 세션스토리지와 캐시 API를 활용한 개발이 대다수 였다. 동료학습 결과 세션스토리지 혹은 state를 통한 api 호출 최적화는 이전에 이미 모두 경험을 해봤었기 때문에
    http response 저장을 위한 cahce storege를 활용하여 로컬 캐싱을 구현하는 것에 표가 모였다. 

- keyDown vs TabIndex
    - TabIndex의 경우 react에서 권장한 기능이지만 해당 기능을 이용한 커스텀에 있어서 많은 불편함이 있을 겅우로 염려되어 keyDown 이벤트를 활용한 키보드 이벤트를 구현하였다

<br/>




