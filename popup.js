(function() {

window.onload = function(){
		set('words','0');
		// Setting a toolbar badge text
		var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
		chrome[roe].onMessage.addListener(
		    function(request, sender, sendResponse) {
		    	console.log(request);
		    	set('words',request.words);
		    }
		);

		function set(id, data){
			document.getElementById(id).innerHTML = data;
		}
}

})();