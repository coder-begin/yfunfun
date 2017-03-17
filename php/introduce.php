<?php
    header("Content-type:text/json;charset=utf-8");
    $introduce = "谁知道呢!";
    if($_POST){
       $introduce=$_POST("message");
    }
    echo $introduce;

?>