<?php
   function initUrl(){
             $urlList=array();

          for($i=1;$i<103;$i++)
          {
                    $urlList[$i]=$i.".jpg";
          }
          echo json_encode($urlList);
   }
     function initRecommendInfo(){

            $recommendInfo=[
               [
                "des"=>"在北京话和其他北方方言里，大爷有三层含义。一是指伯父，这个不用解释了，二是前义的引申，指受人尊敬的老年男子。前两者",
                "up"=>"rulersex",
                "playNum"=>"1万"
               ],
               [
                "des"=>"大爷有三层含义。一是指伯父，这个不用解释了，二是前义的引申，指受人尊敬的老年男子。前两者",
                                "up"=>"张三",
                                "playNum"=>"3万"
               ],
               [
                "des"=>"一是指伯父，这个不用解释了，二是前义的引申，指受人尊敬的老年男子。前两者",
                "up"=>"李四",
                "playNum"=>"9万"
               ],
               [
"des"=>"这个不用解释了，二是前义的引申，指受人尊敬的老年男子。前两者",
"up"=>"王五",
 "playNum"=>"99万"
               ],
               [
                "des"=>"一是指伯父，这个不用解释了，二是前义的引申，指受人尊敬的老年男子。前两者",
                "up"=>"赵六",
                "playNum"=>"98万"
               ],
               [
                "des"=>"一是指伯父，这个不用解释了，二是前义的引申，指受人尊敬的老年男子。前两者",
                 "up"=>"李四",
                 "playNum"=>"9万"
                 ]
            ];

        echo json_encode($recommendInfo);
     }

      if($_POST['num']==1){
        initUrl();
      }else if($_POST['num']==2){
        initRecommendInfo();
      }

 ?>