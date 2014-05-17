// Init cotext menu
chrome.contextMenus.create({"title": "Character counter","contexts":["selection"], "id": "ccount"});
// Init chars count by default
if (!localStorage["ccount"]) {localStorage["ccount"] = 'chars'}
// Catch message
var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
chrome[roe].onMessage.addListener(
    function(request, sender, sendResponse) {
        // Set badge text
        var badge = request[localStorage["ccount"]];
        chrome.browserAction.setBadgeText({text: badge});
        // Set badge and context menu title
        var contextTitle = "[Characters: "+request.chars+"/"+request.charsnospace+"] [Words: "+request.words+"]";
        chrome.contextMenus.update("ccount", {"title": contextTitle});
        chrome.browserAction.setTitle({title: contextTitle});
    }
);