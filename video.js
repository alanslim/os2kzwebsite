var videoModal = document.getElementById("videoModal");
var video = document.getElementById("video");
var closeBtn = document.getElementById("closeBtn");
var body = document.getElementById("body");



videoModal.style.display = "block";
video.play();
body.classList.add("modal-open");


closeBtn.addEventListener("click", function() {
	videoModal.style.display = "none";
	video.pause();
	body.classList.remove("modal-open");



});
