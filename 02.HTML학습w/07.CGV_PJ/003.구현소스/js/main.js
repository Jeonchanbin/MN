// CGV PJ 메인 페이지 JS - main.js

// 예고편 선택메뉴 a요소
var movlink = document.querySelectorAll(".mlist a");
console.log(movlink);

// a요소 개수
var len = movlink.length;
// length는 개수를 구해오는 속성

// for문을 이용하여 링크 설정하기
// for(시;한;증){실행코드}
for(var i=0; i<len; i++){

    // 순서대로 a요소에 click 이번트 설정하기
    // 대상: movlink변수
    movlink.item(i).onclick = function(){chgMV(this)};
    // onclick은 a요소의 이벤트 속성임
    // 이퀄 오른쪽에 할당 되는데
    // 이때 chgMV()함수를 직접쓰면 함수가 바로 실행됨
    // 따라서 이벤트 발생시 호출하려면
    // 익명함수 즉, function(){} 안에 써애함
    // 마치 <a href="" onclick="chgMV()"> 
    // 라고 설정한것가 같음

    // 이벤트에 할당한 익명하ㅏㅁ수 안의 함수에 this를 보내면
    // 이벤트가 걸린 요소 자신이 함수에 전달된다

    // console.log("진짜도니?",i);
}/////////////////for/////////////////

/******************************************** 
    함수명: chgMV
    기능: iframe의 영화예고편 변경하기 
********************************************/
function chgMV(ele){ // ele -> 전달되는 a요소
    // 전달변수는 선언없이 바로 씀

    // 0. 전달되는 a요소의 "data-mv" 속성값 읽어오기
    var minfo = ele.getAttribute("data-mv");
    // getAttribute(속성명) -> 요소의 속성값 읽어오는 내장함수
    // setAttribute(속성명, 값) -> 요소값셋팅 내장함수
    // 1.호출확인
    console.log("바꿔",minfo);

    // 2. 변경대상: #screen iframe
    var tg = document.querySelector("#screen iframe");

    // 3. 변경내용: 대상요소의 src속성을 변경함 
    // src값 중 동영상 ID만 변수에 담긴것으로 변경하여 반영함
    tg.src = `https://www.youtube.com/embed/${minfo}?autoplay=1`
}///////////////////////chgMV함수/////////////



// [익명함수란?]
// 코드를 실행하지 않고 저장하는 메모리 공간
// 단, 이름이 없음
// 즉, 주소지가 없음
// 호출하는 방법을 응용할 수 있도록 함 

// 호출법 
// 1. 변수에 할당하는 방법 -> 변수명이 함수명이 됨
// 2. 이벤트와 연결하는 방법 -> 이벤트 발생시 함수 실행

console.log("바깥쪽");

var myFn = function(){
    console.log("안쪽");
}

// 익명함수 호출
myFn();