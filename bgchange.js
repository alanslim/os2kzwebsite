$(document).ready(function() {
  let urls = ['https://www.pinar.com.tr/images/2016/temp/homeyasampinarim.jpg', 'https://www.pinar.com.tr/images/2016/temp/homeyenilikpinarim.jpg', 'https://www.pinar.com.tr/images/2016/temp/homesaglikpinarim.jpg', 'https://www.pinar.com.tr/images/homelezzetpinarim.jpg'];

  let cout = 1;
  $('.bgr').css('background-image', 'url("' + urls[0] + '")');
  setInterval(function() {
    $('.bgr').css('background-image', 'url("' + urls[cout] + '")');
    cout == urls.length-1 ? cout = 0 : cout++;
  }, 10000);

});
