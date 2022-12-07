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
    $(".gnb2 ul>li a").click(function(e){
        e.preventDefault();
        $(".smenu").animate({height:(gsts?"0%":"72%")});
        gsts?gsts=0:gsts=1;

    }); ////////// click /////////////

})