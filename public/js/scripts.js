$(document).ready(function(){

  $("#switch").click(function(){
    if($(this).prop("checked") == true)
    {
       $.post("saveStatus.php",{action:"online"});       

    }
    else if($(this).prop("checked") == false)
    {
      $.post("saveStatus.php",{action:"offline"}); 

    }
  });

  
});
