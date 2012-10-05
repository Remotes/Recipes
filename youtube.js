(function(Remotes){
	var player = document.getElementById('movie_player');
	var NEXT = 1,
		PREVIOUS = -1,
		PLAYING = 1,
		PAUSED = 2;

	function changeVideo(direction) {
		if (player.getPlaylist && player.getPlaylist()) {
			direction == NEXT ? player.nextVideo() : player.previousVideo();
			return;
		} else {
			if (direction == NEXT) {
				var related_videos = document.getElementsByClassName("related-video");
				document.location = related_videos[0].href;
			} else {
				history.back();
				return;
			}
		}
	}

	function togglePlayback() {
		if (player.getPlayerState() == PLAYING) {
			player.pauseVideo();
		} else if (player.getPlayerState() == PAUSED) {
			player.playVideo();
		}
	}

	function setVolume(increment) {
		player.setVolume(player.getVolume() + increment);
	}

	function toggleMute() {
		player.isMuted() ? player.unMute() : player.mute();
	}

	Remotes
	.on("swipe-left", function(e) { changeVideo(NEXT); })
	.on("swipe-right", function(e) { changeVideo(PREVIOUS); })
	.on("swipe-up", function(e) { setVolume(20); })
	.on("swipe-down", function(e) { setVolume(-20); })
	.on("tap", togglePlayback)
	.on("hold", toggleMute)
	.on("release", function(e){ });

})(new Remotes("preview"));
