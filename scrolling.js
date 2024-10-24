$(document).ready(function(){
  $(window).on("scroll", function() {
    let scrollPos = $(window).scrollTop();
    $("section").each(function() {
      let currSection = $(this);
      if (currSection.offset().top <= scrollPos + 50 && currSection.offset().top + currSection.height() > scrollPos + 50) {
        let sectionId = currSection.attr("id");
        $("ul li").removeClass("bgrl");
        $("ul li a[href='#" + sectionId + "']").parent().addClass("bgrl");
      }
    });
  });
});
