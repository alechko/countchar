// Setting a toolbar badge text
var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
chrome[roe].onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.browserAction.setBadgeText({text: request.count});
        var contextTitle = "[Characters: "+request.count+"]";
        if (request.words){
        	var t = "Words: "+request.words;
    			chrome.browserAction.setTitle({title: t});
    			contextTitle = contextTitle+" [Words: "+request.words+"]";
        }
  			chrome.contextMenus.update("ccount", {"title": contextTitle});
    }
);
chrome.contextMenus.create({"title": "Character counter","contexts":["selection"], "id": "ccount"});