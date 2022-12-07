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
    $(".gnb1>a").click(function(e){
        e.preventDefault();
        $(".shopmenu>ol").animate({top:(gsts?"-80%":"5%")});
        gsts?gsts=0:gsts=1;

    }); ////////// click /////////////

})