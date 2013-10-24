(function() {
    // Set message once page loaded
    var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
    chrome[roe].sendMessage({count: getMessage()});
    // Set message on mouseup event
    var ev = window;
    ev.addEventListener('mouseup', function(e) {
        chrome[roe].sendMessage({count: getMessage()});
        if (getMessage().length > 0){
            chrome[roe].sendMessage({words: getWordsCount()});
        }
    });
    function getMessage(){
        var message = '';
        if (window.getSelection) {
            message = window.getSelection().toString().length.toString();
        }        
        return message;       
    }
    function getWordsCount(){
        var count = 0;
        if (window.getSelection) {
            text = window.getSelection().toString();
            if (text.length > 0){
                text = text.replace(/(^\s*)|(\s*$)/gi,"");
                text = text.replace(/[ ]{2,}/gi," ");
                text = text.replace(/\n /,"\n");
                count = text.split(' ').length.toString();
            }
        }
        return count;
    }    
})();