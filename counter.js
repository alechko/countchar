(function() {
    // Set message once page loaded
    var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
    chrome[roe].sendMessage({count: getMessage()});
    // Set message on mouseup event
    var ev = window;
    ev.addEventListener('mouseup', function(e) {
        chrome[roe].sendMessage({count: getMessage()});
        if (getMessage().length > 0){
            chrome[roe].sendMessage({words: '3'});
        }
    });
    function getMessage(){
        var message = '';
        if (window.getSelection) {
            message = window.getSelection().toString().length.toString();
        }        
        return message;       
    }
})();