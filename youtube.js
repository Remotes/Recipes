(function(Remotes){
    
	function fireKeyboarEvent(el,key)
	{
	    if(document.createEventObject)
	    {
	        var eventObj = document.createEventObject();
	        eventObj.keyCode = key;
	        el.fireEvent("onkeydown", eventObj);
	        eventObj.keyCode = key;   
	    }else if(document.createEvent)
	    {
	        var eventObj = document.createEvent("Events");
	        eventObj.initEvent("keydown", true, true);
	        eventObj.which = key; 
	        eventObj.keyCode = key;
	        el.dispatchEvent(eventObj);
	    }
	} 

	var keys = {
		LEFT : 37,
		UP : 38,
		RIGHT : 39,
		DOWN : 40,
		ENTER : 13
	};
//useful keyCodes
// left: 37
// up : 38
// right : 39
// down : 40
// ENTER : 13


    new Remotes("preview")
        .on("swipe-left", function(e){ fireKeyboarEvent(document.keys.RIGHT); })
		.on("swipe-right", function(e){ fireKeyboarEvent(document.keys.LEFT); })
		.on("swipe-up", function(e){ fireKeyboarEvent(document.keys.DOWN); })
		.on("swipe-down", function(e){ fireKeyboarEvent(document.keys.UP); })
		.on("tap", function(e){ fireKeyboarEvent(document.keys.ENTER); })
		.on("hold", function(e){ /* your magic goes here */ })
		.on("release", function(e){ /* your magic goes here */ });

})(new Remotes("preview"));
