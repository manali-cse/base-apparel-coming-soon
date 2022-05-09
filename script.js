$(document).ready(function(){
  $(".error-message").hide();
  $(".error-image").hide();
});
$(".email-button").hover(function(){
  
    this.classList.toggle("email-button-hover");
});

$(".email-button").on("click",function(){
  if($(".form-control").val().length===0 || !IsEmail($(".form-control").val()))
  {
    $(".error-message").show();
    $(".error-image").show();
    $(".form-control").addClass("form-control-border-error-color");

  }
});
$(".form-control").on("click keypress",function(){
  if($("form-control").text().length==0)
  {
    $(".error-message").hide();
    $(".error-image").hide();
    $(".form-control").removeClass("form-control-border-error-color");
  }
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})?$/;
  if(regex.test(email)) {
    return true;
  }else{
    return false;
  }
}
