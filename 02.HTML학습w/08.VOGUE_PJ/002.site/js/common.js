// 보그PJ 공통JS - common.js

// $(document).ready(function(){});
$(()=>{ ///////////////// jQB //////////////

    console.log("로딩완료");

    ///////// 스크롤 이벤트 구역 ///////////
    // 이벤트명 : scroll
    // 이벤트 대상: widow
    // 변경대상: #top
    const topA = $("#top");
    let scTop;
    let lastSc = 0;
    $(window).scroll(function(){
        // 스크롤 위치값 
        scTop = $(this).scrollTop();
        // scrollTop() 메서드
        //  - 세로스크롤 위치값을 리턴하는 메서드
        console.log(scTop);

        // 1. 슬림메뉴 클래스 on적용
        // 기준위치는 스크롤 위치 100px이상
        if(scTop >= 100){ // 100px 이상
            topA.addClass("on");
            // $().addClass(클래스명) - 클래스넣기

            if(scTop > lastSc){
                topA.removeClass("up");
            }
            else{
                topA.addClass("up");
            }
        } ////// if //////////
        else{ // 100px미만
            topA.removeClass("on up");
            // $().removeClass(클래스명) - 클래스지우기
            // 클래스명에 뛰어쓰기로 복수의 클래스 적용가능

        } ////// else ////////

        /////////////////////////
        // 스크롤 방향 알아내기 //
        // console.log("윗방향");
        // console.log("아랫방향");
        // 마지막위치 업데이트 필수
        lastSc = scTop;
        
    }); /////////// scroll ///////////////

}); ///////////////// jQB //////////////