






function initClickEvent(){
    $("#login").click(function(){
       window.open("login.html");
    });
    $("register").click(function(){
       window.open("register.html");
    });
    $(".drop_down_box").hide();
    $("#cartoon").hover(function(){
        $(".drop_down_box").slideDown("fast");
    },function(){
        $(".drop_down_box").slideUp("fast");
    });
}


$(function(){

    initClickEvent();
});
