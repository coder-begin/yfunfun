/**
 * Created by rulersex on 2017/2/22.
 */
$(function(){

    initInfo();
});
function initInfo(){
    $.ajax({
       type:"GET",
        dataType:"json",
        url:"../php/user-info.php",
        success:function(data){
           $("#userName").text(data["userName"]);
            $("#createTime").text(data["createTime"]);
            $("#userIntroduce").text(data["descripe"]);
            $("#userRealName").text(data["realName"]);
            $("#userSex").text(data["sex"]);
            $("#userSexLove").text(data["sexLove"]);
            $("#userAddress").text(data["address"]);
            $("#userBirthday").text(data["birthday"]);
            $("#userHobbies").text(data["hobbies"]);

        }
    });

}