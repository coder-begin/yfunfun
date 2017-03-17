
$(function () {
    //设置焦点样式
    $(".baseInfoBody >div:last-child input").focus(function () {
        $(this).addClass("focus")

    }).blur(function () {
        $(this).removeClass("focus")
    });
    //设置城市选择

    $(".provincial").change(function () {
        $(".city").html($(getCity($(".provincial option:selected").val())));
    });
    //初始化生日
    initBirth();
    //初始化爱好选择
    check();
    showIntroduce();


});
function getCity(cityName) {
    var citys;
    switch (cityName) {
        case "江苏":
            //南京、徐州、连云港、宿迁、淮安、扬州、盐城、南通、泰州、苏州、常州、无锡、镇江
            citys = "<option>南京</option><option>徐州</option><option>连云港</option><option>宿迁</option><option>淮安</option>"
            break;
        case "山东":
            break;
    }

    return citys;
}
function initBirth() {
    var date = new Date();
    var year = date.getFullYear();
    var mon = date.getMonth() + 1;
    var day = date.getDate();
    $(".calendar").hide();
    $(".birthDay > input").val(year + "-" + mon + "-" + day).click(function () {
        $(".calendar").show();
    })

}

var flag=true;
function check() {
    $("#checkall").click(function () {
        if(flag){
            $(".hobbies>div:eq(1) input:not(checked)").attr("checked", "true");
            flag=false;
        }else{
            $(".hobbies>div:eq(1) input[checked]").removeAttr("checked");
            flag=true;
        }

    });



}
function showIntroduce(){

    $.ajax({
        type:"GET",
        dataType:"text",
        url:"../php/introduce.php",
        success:function(data){
            $("#introduce").text(data);

        }


    });

}
function changeIntroduce(){
    $("#submit").click(function(){


    });
}