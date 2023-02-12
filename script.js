$(function(){ //(window).onload
    
    //--切換分頁
    let blockA = $(".portfolio").offset().top - 60
    let blockB = $(".service").offset().top - 60
    let blockC = $(".about").offset().top

    $(".navBarBtn1").click(function(){
        $("html,body").animate({scrollTop: blockA}, 500)
    })

    $(".navBarBtn2").click(function(){
        $("html,body").animate({scrollTop: blockB}, 500)
    })

    $(".navBarBtn3").click(function(){
        $("html,body").animate({scrollTop: blockC}, 500)
    })

    $(".kv").click(function(){
        $("html,body").animate({scrollTop: 0}, 500)
    })

    //--服務項目說明文字替換
})