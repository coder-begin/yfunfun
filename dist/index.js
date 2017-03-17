$(function () {
    var urlList=[],
        recommendInfo=[];
    $.ajax({
        type:"POST",
        dataType:"json",
        data:{"num":2},
        url:"/yfunfun/dist/php/index.php",
        success:function(data){
            for(var j in data){
                recommendInfo.push(data[j])
            }
            //console.log(recommendInfo)
            reaommendContentEvent(recommendInfo);
        }
    });
    $.ajax({
        type:"POST",
        dataType:"json",
        data:{"num":1},
        url:"/yfunfun/dist/php/index.php",
        success:function(data){
            for(var i in data){
                urlList.push("imgs/"+data[i]);
            }
            lazyLoad(urlList);
        }
    });
    init();

});
function init() {
    initRanking();
    initTitle();
    rankingHoverEvent();
    initBtnGroupLeft();
}
function initRanking() {
    var rankingArr = [
        ["#week-btn-one", "#dropBtn-one"],
        ["#week-btn-two", "#dropBtn-two"],
        ["#week-btn-three", "#dropBtn-three"],
        ["#week-btn-four", "#dropBtn-four"],
        ["#week-btn-five", "#dropBtn-five"],
        ["#week-btn-six", "#dropBtn-six"],
        ["#week-btn-seven", "#dropBtn-seven"],
        ["#week-btn-eight", "#dropBtn-eight"],
        ["#week-btn-nine", "#dropBtn-nine"],
        ["#week-btn-ten", "#dropBtn-ten"],
        ["#week-btn-eleven", "#dropBtn-eleven"]
    ];
    for (var i = 0; i < rankingArr.length; i++) {
        rankingBtnEvent(rankingArr[i][0], rankingArr[i][1]);
    }

}
function rankingHoverEvent(rankingInfo) {

    var rankingInsert = `<div class="rankingInfo"><div><div>nifnifni</div><div>ruler:2017.15.2</div></div><div class="h-line"></div><div><img src="../imgs/slider_2.jpg"><textarea disabled>ssssssssssssssssssssssssssssssssssssssssss</textarea></div><div class="h-line"></div><div><span>1万</span><span>1万</span><span>1万</span><span>1万</span></div></div>`;
    $(".ranking>li").each(function () {
        $(this).hover(function () {
            $(this).before($(rankingInsert));
            $(this).prev().show();
        }, function () {
            $(this).prev().hide();
        })
    })
}
function rankingBtnEvent(weekBtn, dropBtn) {
    var flag = true;
    $(weekBtn).click(function () {
        if (flag) {
            $($(dropBtn)[0].children[0].children[0]).text("一周");
            $(weekBtn).text("三日");
            flag = false;
        } else {
            $($(dropBtn)[0].children[0].children[0]).text("三日");
            $(weekBtn).text("一周");
            flag = true;
        }
        $(this).hide();
    });
    $(dropBtn).hover(function () {
        $(weekBtn).show();
    }, function () {
        $(weekBtn).hide();
    });
}
function initTitle() {
    var titleArr = [
        "btn-drop-carton",
        "btn-drop-Some-drama",
        "btn-drop-music",
        "btn-drop-dance",
        "btn-drop-game",
        "btn-drop-life",
        "btn-drop-Kichiku",
        "btn-drop-entertainment",
        "btn-drop-film",
        "btn-drop-broadcast",
        "btn-drop-square"
    ];
    for (var i = 0; i < titleArr.length; i++) {
        titleBtnEvent(titleArr[i]);
    }
}
function titleBtnEvent(btnDrop) {
    $("#" + btnDrop).click(function () {
        $("." + btnDrop).hide();
    });
    $("#" + btnDrop).hover(function () {
        $("." + btnDrop).show();
    }, function () {
        $("." + btnDrop).hide();
    });
}
function reaommendContentEvent(recommendInfo) {
    var info = [];
    for(var j=0;j<recommendInfo.length;j++){
        info[j]="<p>"+recommendInfo[j].des+"</p><p>up主:"+recommendInfo[j].up+"</p><p>播放:"+recommendInfo[j].playNum+"</p>";
    }
    $(".recommend-occlusion-main").each(function (i) {
        var child1 = this.children[0];
        var child2 = this.children[1];
        $(this).hover(function () {
            $(child1).hide();
            $(child2).append($(info[i])).show();
        }, function () {
            $(child1).show();
            $(child2).empty().hide();
        });
    });
}
function initBtnGroupLeft() {


    if (window.innerHeight > 430) {
        $(".btnLeft").css({
            top: function () {
                return (window.innerHeight - 180) / 2;
            }
        })
    }
    if (window.innerWidth > 950) {
        $(".btnLeft").css({
            right: function () {
                return (window.innerWidth - 1000) / 2
            }
        })
    } else {
        $(".btnLeft").css({
            right: 0
        })
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $(".btnLeft").css({
                top: function () {
                    return (window.innerHeight - 500) / 2 + $(window).scrollTop();
                }
            })
        }
    });

    $(window).resize(function () {
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var rightDis = (windowWidth - 1000) / 2;
        var topDis = (windowHeight - 430) / 2;
        if (windowHeight > 430) {
            $(".btnLeft").css({
                top: topDis
            })
        }
        if (windowWidth > 950) {
            $(".btnLeft").css({
                right: rightDis
            })
        } else {
            $(".btnLeft").css({
                right: 0
            })
        }
    })

}
function lazyLoad(urlList) {
    //为每一个图片设置属性
    $(".extension-img,.broadcast-img").each(function(index){
        $(this).attr({
            data_img: urlList[index],
            isloaded: 0
        });
    });
    //初始化开始界面
    $(".extension-img,.broadcast-img").each(function (index) {
        if (this.getBoundingClientRect().top <window.innerHeight
            && $(this).attr("isloaded")==0) {
            $(this).css({
                background: function () {
                    var img_addr = $(this).attr("data_img");
                    return "url(" + img_addr + ")";
                }
            }).attr("isloaded",1);
        }
    });
    //响应下拉事件
    $(window).scroll(function () {
        $(".extension-img,.broadcast-img").each(function (index) {
            if (this.getBoundingClientRect().top <window.innerHeight
                && $(this).attr("isloaded")==0) {
                $(this).css({
                    background: function () {
                        var img_addr = $(this).attr("data_img");
                        return "url(" + img_addr + ")";
                    }
                }).attr("isloaded",1);
            }
        });

    });
}