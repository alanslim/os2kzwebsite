let videoModal = document.getElementById("videoModal");
let video = document.getElementById("video");
let closeBtn = document.getElementById("closeBtn");
let body = document.body;


videoModal.style.display = "block";
video.play();
body.classList.add("modal-open");


closeBtn.addEventListener("click", function() {
	videoModal.style.display = "none";
	video.pause();
	body.classList.remove("modal-open");



});
