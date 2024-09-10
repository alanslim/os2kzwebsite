
$(function(){


$(".prod1").hide();
let activeBrandData = $(".brand-nav .active a").attr("href");
$(activeBrandData).show(); 

$(".brand-nav li").on("click", function(){

  $(".brand-nav .active").removeClass("active");
  $(".brand-nav li span").removeClass("bl");
  $(this).addClass('active');
  $(this).find('span').addClass('bl');

  $(activeBrandData).fadeOut( "slow", function() {
    activeBrandData = $(".brand-nav .active a").attr("href");
    $(activeBrandData).fadeIn("slow", function() {});
  });

  return false;
});
});



















