$(document).foundation();

document.addEventListener('deviceready', this.onDeviceReady, false);

function onDeviceReady() {
	console.log("deviceready");
}

function togglePlayPause() {
	var audio = document.getElementById('audio');
	var controls = document.getElementById('controls');
	if (audio.paused || audio.ended) {
		controls.innerHTML = "<i class='fa fa-pause'></i>";
		audio.play();
	} else {
		controls.innerHTML = "<i class='fa fa-play'></i>";
		audio.pause();
	}
}