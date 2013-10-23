(function() {
    var ev = window;
    var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';                            
    var length = getSelectionText().length > 0 ? getSelectionText().length.toString() : '0';
    chrome[roe].sendMessage({count: length});
    // Set count on mouseup
    ev.addEventListener('mouseup', function(e) {
        chrome[roe].sendMessage({count: getSelectionText().length.toString()});
    });
    window.onload = function() {
    };
    function getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        }
        return text;
    }
})();