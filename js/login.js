/**
 * Created by rulersex on 2017/2/27.
 */
function initEvent(){
    $("#login").click(function(){
       window.open("/yfunfun/login.html","_self");

    });
    $("#login-body").click(function(){
        window.open("/yfunfun/login.html","_self");

    });
    $("#register").click(function(){
        window.open("/yfunfun/register.html");

    });
    $("#register-body").click(function(){
        window.open("/yfunfun/register.html");

    });


}


$(function(){
    initEvent();
});