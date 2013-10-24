// Setting a toolbar badge text
var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
chrome[roe].onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.browserAction.setBadgeText({text: request.count});
        if (request.words){
        	var t = "Word count: "+request.words;
    			chrome.browserAction.setTitle({title: t});
        }
    }
);
