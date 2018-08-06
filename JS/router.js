$(function(){

    // $("#title").load("../page/title/chat_title.html")
    $("#dynamic").load("../page/dynamic/chat.html")




    //切换
    $(".menu-box").click(function() {

        $("#dynamic").load($(this).data("page"))

    })


})