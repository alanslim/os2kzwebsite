
$(function(){


$(".prod1").hide();
var activeVehicleData = $(".brand-nav .active a").attr("href");
$(activeVehicleData).show(); 

$(".brand-nav li").on("click", function(){

  $(".brand-nav .active").removeClass("active");
  $(".brand-nav li span").removeClass("bl");
  $(this).addClass('active');
  $(this).find('span').addClass('bl');

  $(activeVehicleData).fadeOut( "slow", function() {
    activeVehicleData = $(".brand-nav .active a").attr("href");
    $(activeVehicleData).fadeIn("slow", function() {});
  });

  return false;
});
});



















