$(()=>{
    let gsts = 0;
    $(".gnb1>a").click(function(e){
        e.preventDefault();
        $(".shopmenu>ol").animate({top:(gsts?"-80%":"5%")});
        gsts?gsts=0:gsts=1;

    }); ////////// click /////////////

})
$(()=>{
    let gsts = 0;
    $(".gnb2 ul>li:first-child>a").click(function(e){
        e.preventDefault();
        $(".smenu").animate({height:(gsts?"0%":"72%")});
        gsts?gsts=0:gsts=1;

    }); ////////// click /////////////

})

/* 
     window.addEventListener("DOMContentLoaded", () => {
                // 햄버거 셋팅
                // 대상: .ham
                const ham = document.querySelector(".ham");
                // 이벤트 설정
                ham.onclick = () => {
                    // GNB박스 & 햄버거버튼에 클래스 on넣기/뺴기
                    ham.classList.toggle("on");
                    gnb.classList.toggle("on");
                }; /////////// click ///////////

                // 전체메뉴셋팅
                // 대상: .gnb
                const gnb = document.querySelector(".gnb");

*/
$(()=>{
    $(".ham").click(function(e){
        e.preventDefault();
        $("#top").toggleClass("on");
    }); //////////// click ////////////
})