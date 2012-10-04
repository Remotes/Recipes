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

	Remotes.on("swipe-left", function(e) { swipe('pan_rt'); })
	.on("swipe-right", function(e) { swipe('pan_lt'); })
	.on("swipe-down", function(e) { swipe('pan_up'); })
	.on("swipe-up", function(e) { swipe('pan_down'); })
	.on("zoom-in", function(e) { zoom('zoom_in'); })
	.on("zoom-out", function(e) { zoom('zoom_out'); });

})(new Remotes("preview"));
