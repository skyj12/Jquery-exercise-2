$(document).ready(function() {
    $(".nav-menu").hide();
      $('#menu-icon').on("click", function() {
      $('.nav-menu').slideToggle();
      });
  
  $("#numbers").hide();
    $(".letters").on("click", function(){
  $("#letters").show('fast');
  $("#numbers").hide('fast');
    })
  
     $(".numbers").on("click", function(){
  $("#numbers").show('fast');
  $("#letters").hide('fast');
    })
    $("#Letters").css("display", "block");
    $("#Numbers").css("display", "none");
  });