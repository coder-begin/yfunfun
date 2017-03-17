<?php
header("Content-type:text/json;charset=utf-8");
if($_POST){
    $name = $_POST['name'];
    $age = $_POST['age'];

    echo $name.$age;

}

?>
