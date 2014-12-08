(function() {
    window.addEventListener('onload', setMessage, false);
    window.addEventListener('mouseup', setMessage, false);
    function setMessage(){
        var m = getMessage();
        var roe = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
        chrome[roe].sendMessage({chars: m.chars, charsnospace: m.charsnospace, words: m.words});
    }
    function getMessage(){
        var m = [];
        if (window.getSelection) {
            text = window.getSelection().toString();
            chars = text.length.toString();
            m.chars = chars;
            m.charsnospace = text.replace(/ /g,'').length.toString();
            words = getWordsCount(text).toString();
            m.words = words;
        }
        return m;
    }
    function getWordsCount(text){
        var count = 0;
        if (text.length > 0){
            var regex = /\s+/gi;
            count = text.trim().replace(regex, ' ').split(' ').length;
        }
        return count;
    }
})();