// 데이터를 처리하기 위한 JS - textData.js

// 1. 중제목 데이터
const mTitle = "모듈을 이용한 구현";

// 2. 소제목 데이터
const sTitle = "이것은 리액트의 기초 입니다";

// 3. 사람데이터 : [이름,나이]
const personInfo = [
    ["준현", 23],
    ["정희", 33],
    ["성락", 40],
    ["진경", 22],
]; ////// 배열 //////

// 4. 영화정보 데이터
const mv = [
    [
        "조제",
        "멜로/로맨스, 드라마",
        "김종관",
        "한지민, 남주혁",
        "조제 보러 오세요",
    ],
    [
        "이웃사촌",
        "드라마, 코미디",
        "이환경",
        "정우, 김희원",
        "이웃을 사랑합시다",
    ],
    [
        "도굴",
        "범죄",
        "박정배",
        "이제훈, 조우진, 신혜선, 임원희",
        "도굴은 범죄예요",
    ],
];
// 다중변수 전송
export { mTitle, sTitle, personInfo, mv };

/******************************* 
    export형식: 
    1. export {변수,변수,변수,변수};
    -> 여러개의 변수를 내보낼 경우 사용
    2. export default 변수;
    -> 단일한 변수를 내보낼때 사용
    -> default 단 하나의 변수만 내보내는 형시을 제한

*******************************/
