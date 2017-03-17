<?php
    $userName="rulersex";
    $createTime="2016.11.11";
    $descripe="你知道呢!";
    $realName="张三";
    $sex="男";
    $sexLove="女";
    $address="江苏南京";
    $birthday="1925.6.6";
    $hobbies="打篮球 打排球";
    function initInfo(){
        $userInfo=[
            'userName'=>"rulersex",
            'createTime'=>"2016.11.11",
           'descripe'=> "你知道呢!",
            'realName'=>"张三",
            'sex'=>"男",
            'sexLove'=>"女",
            'address'=>"江苏南京",
            'birthday'=>"1925.6.6",
            'hobbies'=>"打篮球 打排球"
      ];
        echo json_encode($userInfo);
    }
    initInfo();


?>