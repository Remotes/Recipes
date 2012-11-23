(function (Remotes) {
	var arrowUp, arrowRight, arrowDown, arrowLeft, zoomIn, zoomOut, i;

	var divs = document.getElementsByTagName('div');
	for (i = 0; i < divs.length; i++) {
		switch (divs[i].getAttribute("log")) {
			case "pan_up":
				arrowUp = divs[i];
				break;
			case "pan_rt": arrowRight = divs[i]; break;
			case "pan_down": arrowDown = divs[i]; break;
			case "pan_lt": arrowLeft = divs[i]; break;
			default: break;
		}

		switch (divs[i].getAttribute("guidedhelpid")) {
			case "zoom_in": zoomIn = divs[i].children[1]; break;
			case "zoom_out": zoomOut = divs[i].children[1]; break;
			default: break;
		}
	}

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

	function toggleSatellite() {
		var satellite, maps;
		for (i = 0; i < divs.length; i++) {
			if (divs[i].getAttribute("jsprops") === "activityId:4") {
				maps = divs[i];
			} else if (divs[i].getAttribute("jsprops") === "activityId:3") {
				satellite = divs[i];
			}
		}
		if (maps) {
			activateElement(maps);
		} else {
			activateElement(satellite);
		}
	}

	function toggleOverlayedInfo() {
		console.log('hold');
		var satellite, maps, traffic, labels;
		for (i = 0; i < divs.length; i++) {
			if (divs[i].getAttribute("jsprops")=="activityId:4") {
				maps = divs[i];
			} else if (divs[i].getAttribute("jsprops")=="activityId:3") {
				satellite = divs[i];
			} else if (divs[i].getAttribute("jsprops") == "activityId:7") {
				traffic = divs[i];
			} else if (divs[i].getAttribute("jsprops") == "activityId:1") {
				labels = divs[i];
			}
		}
		if (maps) {
			activateElement(labels);
		} else if (maps) {
			activateElement(traffic);
		}
	}

	Remotes.on("swipe-up", function(e) { activateElement(arrowUp); })
	.on("swipe-right", function(e) { activateElement(arrowLeft); })
	.on("swipe-down", function(e) { activateElement(arrowDown); })
	.on("swipe-left", function(e) { activateElement(arrowRight); })
	.on("zoom-in", function(e) { activateElement(zoomIn); })
	.on("zoom-out", function(e) { activateElement(zoomOut); })
	.on("tap", function(e) { toggleSatellite(); })
	.on("hold", function(e) { toggleOverlayedInfo(); });

})(new Remotes("preview"));
