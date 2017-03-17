/**
 * Created by rulersex on 2017/2/16.
 */
$(function () {
    //设置按钮位置
    var height = $(".carousel").height() / 5 * 4;
    var width = ($(".carousel").width() - $(".carousel ul").width()) / 2;
    $(".carousel ul").css({top: height, left: width});
    var $preNum = 0;
    $(".carousel ul >li").focusin(function (e) {
        //去除前一个的checked
        $($(".carousel ul li input").get($preNum)).removeAttr("checked");
        //为现在点击的元素添加checked
        $(e.target).attr("checked", "checked");
        //获取点击的元素的标号
        $(".carousel ul li input").each(function (i) {
            if ($(this).attr("checked")) {
                var distance = Math.abs($preNum - i) * 400;
                if ($preNum < i) {
                        $(".carousel> div").delay(100).animate({left: "-=" + distance + "px"}, 400);
                        $preNum = i;
                } else {
                        $(".carousel> div").delay(100).animate({left: "+=" + distance + "px"}, 400);
                        $preNum = i;
                }

            }
        });

    });

});

