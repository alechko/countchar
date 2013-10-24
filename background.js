// Setting a toolbar badge text
var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
chrome[roe].onMessage.addListener(
    function(request, sender, sendResponse) {
        // This cache stores page load time for each tab, so they don't interfere
        chrome.storage.local.get('cache', function(data) {
            if (!data.cache) data.cache = {};
            data.cache['words'] = request.words;
            chrome.storage.local.set(data);
        });
        chrome.browserAction.setBadgeText({text: request.count});
        if (request.words){
        	var t = "Word count: "+request.words;
    			chrome.browserAction.setTitle({title: t});
        }
    }
);

// cache eviction
chrome.tabs.onRemoved.addListener(function() {
    chrome.storage.local.get('cache', function(data) {
        if (data.cache) delete data.cache['words'];
        chrome.storage.local.set(data);
    });
});