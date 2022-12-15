$(document).ready(function(){

    //zona 1
    $("#zona1").click(function(){
       if($("#zona1").hasClass("pulsante-off")){
           $("#zona1").removeClass("pulsante-off");
           $("#zona1").addClass("pulsante-on");

           $("#msgZ1on").css("display", "block");
           $("#msgZ1off").css("display", "none");

           $.post(
              "irriga.php",{
                 zona: 1,
                 comando: "attiva"
            },
                 function(risposta){
                 console.log(risposta);
                // echo(risposta);
            }
        )
       }

       else{
         $("#zona1").removeClass("pulsante-on");
         $("#zona1").addClass("pulsante-off");

         $("#msgZ1off").css("display", "block");
         $("#msgZ1on").css("display", "none");

         $.post(
            "irriga.php",{
                zona: 1,
                comando: "disattiva"
            },
            function(risposta){
                console.log(risposta);
                //echo(risposta);
            }
        )

       }});


     //zona 2
     $("#zona2").click(function(){
        if($("#zona2").hasClass("pulsante-off")){
            $("#zona2").removeClass("pulsante-off");
            $("#zona2").addClass("pulsante-on");
 
            $("#msgZ2on").css("display", "block");
            $("#msgZ2off").css("display", "none");
 
            $.post(
               "irriga.php",{
                  zona: 2,
                  comando: "attiva"
             },
                  function(risposta){
                  console.log(risposta);
                 // echo(risposta);
             }
         )
        }
 
        else{
          $("#zona2").removeClass("pulsante-on");
          $("#zona2").addClass("pulsante-off");
 
          $("#msgZ2off").css("display", "block");
          $("#msgZ2on").css("display", "none");
 
          $.post(
             "irriga.php",{
                 zona: 2,
                 comando: "disattiva"
             },
             function(risposta){
                 console.log(risposta);
                 //echo(risposta);
             }
         )
 
        }});
  //zona 3
  $("#zona3").click(function(){
    if($("#zona3").hasClass("pulsante-off")){
        $("#zona3").removeClass("pulsante-off");
        $("#zona3").addClass("pulsante-on");

        $("#msgZ3on").css("display", "block");
        $("#msgZ3off").css("display", "none");

        $.post(
           "irriga.php",{
              zona: 3,
              comando: "attiva"
         },
              function(risposta){
              console.log(risposta);
             // echo(risposta);
         }
     )
    }

    else{
      $("#zona3").removeClass("pulsante-on");
      $("#zona3").addClass("pulsante-off");

      $("#msgZ3off").css("display", "block");
      $("#msgZ3on").css("display", "none");

      $.post(
         "irriga.php",{
             zona: 1,
             comando: "disattiva"
         },
         function(risposta){
             console.log(risposta);
             //echo(risposta);
         }
     )

    }});

     //zona 1
     $("#zona4").click(function(){
        if($("#zona4").hasClass("pulsante-off")){
            $("#zona4").removeClass("pulsante-off");
            $("#zona4").addClass("pulsante-on");
 
            $("#msgZ4on").css("display", "block");
            $("#msgZ4off").css("display", "none");
 
            $.post(
               "irriga.php",{
                  zona: 1,
                  comando: "attiva"
             },
                  function(risposta){
                  console.log(risposta);
                 // echo(risposta);
             }
         )
        }
 
        else{
          $("#zona4").removeClass("pulsante-on");
          $("#zona4").addClass("pulsante-off");
 
          $("#msgZ4off").css("display", "block");
          $("#msgZ4on").css("display", "none");
 
          $.post(
             "irriga.php",{
                 zona: 4,
                 comando: "disattiva"
             },
             function(risposta){
                 console.log(risposta);
                 //echo(risposta);
             }
         )
 
        }});
 





});
   
    