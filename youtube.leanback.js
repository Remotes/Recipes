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
/*useful keyCodes
	left: 37
	up : 38
	right : 39
	down : 40
	ENTER : 13
*/

    Remotes
        .on("swipe-left", function(e){ var eventObj = document.createEvent("Events"); eventObj.initEvent("keydown", true, true); eventObj.which = 37; eventObj.keyCode = 37; document.dispatchEvent(eventObj); })
		.on("swipe-right", function(e){ var eventObj = document.createEvent("Events"); eventObj.initEvent("keydown", true, true); eventObj.which = 39; eventObj.keyCode = 39; document.dispatchEvent(eventObj); })
		.on("swipe-up", function(e){ var eventObj = document.createEvent("Events"); eventObj.initEvent("keydown", true, true); eventObj.which = 38; eventObj.keyCode = 38; document.dispatchEvent(eventObj);  })
		.on("swipe-down", function(e){ var eventObj = document.createEvent("Events"); eventObj.initEvent("keydown", true, true); eventObj.which = 40; eventObj.keyCode = 40; document.dispatchEvent(eventObj); })
		.on("tap", function(e){ var eventObj = document.createEvent("Events"); eventObj.initEvent("keydown", true, true); eventObj.which = 13; eventObj.keyCode = 13; document.dispatchEvent(eventObj); })
		.on("hold", function(e){ })
		.on("release", function(e){ });

})(new Remotes("preview"));