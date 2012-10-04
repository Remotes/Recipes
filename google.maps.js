(function(Remotes){
	function activateElement(element) {
		var myEvent;
		if (document.createEventObject) {
			myEvent = document.createEventObject();
			return element.fireEvent('onclick', myEvent);
		} else {
			myEvent = document.createEvent("HTMLEvents");
			myEvent.initEvent('click', true, true);
			return !element.dispatchEvent(myEvent);
		}
	}

	function swipe(attribute) {
		var divs = document.getElementsByTagName('div');
		for (var i = 0; i < divs.length; i++) {
			if (divs[i].getAttribute("log")==attribute) {
				activateElement(divs[i]);
			}
		}
	}

	function zoom(attribute) {
		var divs = document.getElementsByTagName('div');
		for (var i = 0; i < divs.length; i++) {
			if (divs[i].getAttribute("guidedhelpid")==attribute) {
				activateElement(divs[i].children[1]);
			}
		}
	}

	function toggleSatellite() {
		var divs = document.getElementsByTagName('div');
		var satellite, maps;
		for (var i = 0; i < divs.length; i++) {
			if (divs[i].getAttribute("jsprops")=="activityId:4") {
				maps = divs[i];
			} else if (divs[i].getAttribute("jsprops")=="activityId:3") {
				satellite = divs[i];
			}
		}
		if (maps) {
			activateElement(maps);
		} else {
			activateElement(satellite);
		}
	}

	Remotes.on("swipe-left", function(e) { swipe('pan_rt'); })
	.on("swipe-right", function(e) { swipe('pan_lt'); })
	.on("swipe-down", function(e) { swipe('pan_up'); })
	.on("swipe-up", function(e) { swipe('pan_down'); })
	.on("zoom-in", function(e) { zoom('zoom_in'); })
	.on("zoom-out", function(e) { zoom('zoom_out'); })
	.on("tap", function(e) { toggleSatellite(); });

})(new Remotes("preview"));
