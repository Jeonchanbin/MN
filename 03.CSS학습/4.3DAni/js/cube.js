// 큐브애니 JS - cube.js

// 로드구역 //////////////////
window.addEventListener("DOMContentLoaded", 
function(){

    //호출확인
    console.log("로딩완료");

    // 클릭이벤트 대상: .btns button
    const btns = document.querySelector(".btns button");

    // 변경대상: .cube
    const cube = this.document.querySelector(".cube");

    // 대상에 클릭설정하기
    btns.onclick = function(){};
    
    // 클릭시 기능구현함수
    const aniFn = function(){

        // 1. 호출확인 
        console.log("나야나");

        // 2. 대상선정: .cube -> cube변수

        // 3. 변ㄱㅇ내용: 변경대상 요소에 클래스 넣기/빼기
        cube.classList.add("on");

        // 4. 큐브 클래스 on여부에 따라 버튼 글자 변경하기
        // 비?집:놀이동산 -> 삼항연산자
        cube.classList.contains("on"); ? 
        btns.innerText="멈춰" : btns.innerText="돌아";

        /*****************************************
         * [클래스 컨트롤 객체]
         * classList
         * -> 하위 메서드
         * 1. add(클래스명) 
            -> 클래스 추가
         * 2. remove(클래스명) 
            -> 클래스 제거
         * 3. toggle(클래스명) 
            -> 클래스 유무에 따라 추가/제거 
         * 4. contains(클래스명)   
            -> 지정한 클래스가 있으면 true
            (없으면 false)
        *****************************************/ 

    }///////////// aniFn함수 ///////////

    btns.onclick = aniFn;
    // 전달값이 없다면 소괄호 생략한 함수명만 이벤트 속성에 
    // 할당하묜 바로 실해오디지 않고 이벤ㅌ,가 발생할 때 실행된다


});/////////////////로드구역////////////