$(function () {
    $("#dynamic-friends-1-right-bottom-right-1").click( function () {
        $("#dynamic-friends-1-right-bottom-say-box-1").toggle(400);

    })
    $("#dynamic-friends-1-right-bottom-right-2").click( function () {
        $("#dynamic-friends-1-right-bottom-say-box-2").toggle(400);

    })
    $("#dynamic-friends-1-right-bottom-right-3").click( function () {
        $("#dynamic-friends-1-right-bottom-say-box-3").toggle(400);

    })
    $("#dynamic-friends-1-right-bottom-right-4").click( function () {
        $("#dynamic-friends-1-right-bottom-say-box-4").toggle(400);

    })
    $("#p1").click( function () {
        $("#dynamic-friends-1-right-text-2").toggle(400);

    })

    $(".full_text_btn").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
        $(this).css("display","none");
    });
    $(".full_text_btn_no").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","120");
        $(this).css("display","none");
        $(".full_text_btn").toggle();
    });





    $("p#g").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
        $("#dynamic_friends_bottom_1").css("display","none");
        $(this).css("display","none");
        $("p#h").css("display","on");

    });
    $("p#h").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
            $("#dynamic_friends_bottom_1").toggle();
        $(this).css("display","none");
        $("p#g").css("display","on");
    });





    $("p#a").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
        $("#dynamic_friends_bottom_2").css("display","none");
        $(this).css("display","none");
        $("p#b").css("display","on");

    });
    $("p#b").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
        $("#dynamic_friends_bottom_2").toggle();
        $(this).css("display","none");
        $("p#a").css("display","on");
    });




    $("p#c").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
        $("#dynamic_friends_bottom_3").css("display","none");
        $(this).css("display","none");
        $("p#d").css("display","on");

    });
    $("p#d").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
        $("#dynamic_friends_bottom_3").toggle();
        $(this).css("display","none");
        $("p#c").css("display","on");
    });






    $("p#e").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
        $("#dynamic_friends_bottom_4").css("display","none");
        $(this).css("display","none");
        $("p#f").css("display","on");

    });
    $("p#f").click(function(){
        var ele = $(this).parent().parent().find(".dynamic-friends-1-right-text");
        ele.css("height","auto");
        $("#dynamic_friends_bottom_4").toggle();
        $(this).css("display","none");
        $("p#e").css("display","on");
    });






})







$(function () {

    $("#title-search").click( function () {
        $("#hidden").toggle();

    })
    $("#hidden").click( function () {
        $("#hidden-2").toggle();

    })
})