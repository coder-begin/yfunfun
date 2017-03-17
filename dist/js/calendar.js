/**
 * Created by rulersex on 2017/2/19.
 */

function minMonth() {
    $(".head button:nth-of-type(1)").click(function () {
        var mon = parseInt($(this).next().text().substring(4));
        var year = parseInt($(this).next().text().substring(0, 4));
        //alert(date)
        if (mon > 1) {
            $(this).next().text(year + " " + (mon - 1));

        } else {
            $(this).next().text((--year) + " " + "12");
        }
        $(".table-body button:not(disabled)").unbind("click", birthClickEvent);
        showDay();
        changeDate()

    })
}
function addMonth() {
    $(".head button:nth-of-type(3)").click(function () {
        var mon = parseInt($(this).prev().text().substring(4));
        var year = parseInt($(this).prev().text().substring(0, 4));
        if (mon < 12) {
            $(this).prev().text(year + " " + (mon + 1));

        } else {
            $(this).prev().text((++year) + " " + "1");
        }
        //移除之前的一页日期的事件
        $(".table-body button:not(disabled)").unbind("click", birthClickEvent);
        //展示新的一页日期
        showDay();
        changeDate()

    })

}

function showDay() {
    var getdate = $(".head button:nth-of-type(2)");
    var mon = parseInt(getdate.text().substring(4));
    var year = parseInt(getdate.text().substring(0, 4));
    var dayNum = parseInt(new Date(year, mon, 0).getDate());
    var week = new Date(year, mon, 1).getDay();
    if (week === 0) {
        week = 7;
    }
    var num_pre = parseInt(new Date(year, mon - 1, 0).getDate()) - week + 1;
    var num_next = parseInt(new Date(year, mon + 1, 0).getDate());
    for (var i = 0; i < week; i++) {
        var day_pre = $("<button disabled>" + num_pre + "</button>");
        $($(".table-body td").get(i)).html(day_pre);
        num_pre++;
    }

    for (var j = week; j < dayNum + week; j++) {
        var day = $("<button>" + (j - week + 1) + "</button>");
        $($(".table-body td").get(j)).html(day);
    }
    for (var k = dayNum + week; k < $(".table-body td").length; k++) {
        var day_next = $("<button disabled>" + num_next + "</button>");
        $($(".table-body td").get(k)).html(day_next);
        num_next--;
    }


}
function birthClickEvent() {
    var getdate = $(".head button:nth-of-type(2)");
    var mon = parseInt(getdate.text().substring(4));
    var year = parseInt(getdate.text().substring(0, 4));
    $(".birthDay input").val(year + "-" + mon + "-" + $(this).text());
    $(".calendar").hide();
}
function changeDate() {

    $(".table-body button:not(disabled)").click(birthClickEvent);


}
function init() {
    minMonth();
    addMonth();
    showDay();
    changeDate();
}
$(function () {
    var date = new Date();
    $(".head button:nth-of-type(2)").text(date.getFullYear() + " " + (date.getMonth() + 1));
    init();
});