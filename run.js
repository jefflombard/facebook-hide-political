enable();
toggle = false;
disable();

function disable(){
    chrome.browserAction.setIcon({path:"iconbw.png"});
    chrome.tabs.executeScript(null, {file: "unfilter.js"})
}

function enable(){
    chrome.browserAction.setIcon({path:"icon.png"});
    chrome.tabs.executeScript(null, {file: "filter.js"});
}

function updateState(){
    console.log('5');
    if(toggle==false){
        toggle=true;
        enable();
    }else{
        toggle=false;
        disable();
    }
}

chrome.browserAction.onClicked.addListener(updateState);

chrome.tabs.onUpdated.addListener(function(){
    if (toggle === true){
        chrome.tabs.executeScript(null, {file: "filter.js"});
    }
});
