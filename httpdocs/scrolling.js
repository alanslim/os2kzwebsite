$(document).ready(function(){
  $(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    $("section").each(function() {
      var currSection = $(this);
      if (currSection.offset().top <= scrollPos + 50 && currSection.offset().top + currSection.height() > scrollPos + 50) {
        var sectionId = currSection.attr("id");
        $("ul.nav li").removeClass("bgrl");
        $("ul.nav li a[href='#" + sectionId + "']").parent().addClass("bgrl");
      }
    });
  });
});
