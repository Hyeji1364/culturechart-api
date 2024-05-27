# Youtube API를 이용한 __ 사이트
- 사유

## 작업 순서
1. node.js 설치 / 버전확인 : node -v
2. react 설치
3. npx create-react-app .
4. 라이브러리 설치
5. 폴더 셋팅 : 필요없는 파일 제거
6. Header 설정
7. Suspense 설정
8. 각 페이지 메타 태그 설정(Helmet)

## 실행하기
`npm start` : 리액트 시작하기

## 자동완성 단축키
`rafce`

## 필요한 라이브러리 설치
- react를 설치 `npm create-react-app 폴더이름` : 폴더를 생략하고 싶으면 .으로 표시
- react-router-dom 설치 `npm install react-router-dom` : 주소를 설정하기 위한 라이브러리 -> package.json에서 버전 확인 가능
- axios 설치 `npm install axios` : API 라이브러리
- react icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘 설치
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass`

````bash
npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper
````

## 용어 정리
- `axious` : Axios는 웹 브라우저나 Node.js에서 사용할 수 있는 도구로, 인터넷을 통해 서버에 정보를 요청하거나 보낼 수 있게 해주는 JavaScript 라이브러리입니다. 즉, 웹 페이지에서 필요한 데이터를 서버로부터 불러오거나, 사용자의 입력을 서버에 전달할 때 사용할 수 있습니다. Axios의 주요 장점은 간단하게 웹 서버와의 통신을 구현할 수 있다는 것입니다.

## 사용 스택
- node.js 설치

## 프로젝트 실행

## 트러블 슈팅
- node.js 설치시 폴더 인식 못함 : 
검색을 해보니 .... 이렇게 해결을 했다.

## build 실행
- npm run build

## React
버츄얼 돔 방식 - 재활용 가능