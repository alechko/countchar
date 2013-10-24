(function() {
    var m = getMessage();
    // Set message once page loaded
    var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
    chrome[roe].sendMessage({count: m.count});
    // Set message on mouseup event
    var ev = window;
    ev.addEventListener('mouseup', function(e) {
        m = getMessage();
        chrome[roe].sendMessage({count: m.count, words: m.words});
    });

    function getMessage(){
        var m = [];
        if (window.getSelection) {
            text = window.getSelection().toString();
            count = text.length.toString();
            m.count = count;
            words = getWordsCount(text).toString();
            m.words = words;
        }        
        return m;       
    }
    function getWordsCount(text){
        var count = 0;
        if (text.length > 0){
            text = text.replace(/(^\s*)|(\s*$)/gi,"");
            text = text.replace(/[ ]{2,}/gi," ");
            text = text.replace(/\n /,"\n");
            count = text.split(' ').length;
        }
        return count;
    }    
})();