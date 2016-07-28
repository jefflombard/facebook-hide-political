function filter_politics(timestamp) {
    if (!lastRefresh){
        lastRefresh = 0;
    }

    var newRefresh = timestamp.timeStamp;
    console.log(newRefresh - lastRefresh);
    if (newRefresh - lastRefresh >= 750 || lastRefresh === null){
        for (var story of stories) {
            html = story.innerHTML.toLowerCase();
            for (var term of terms){
                var regex_term = new RegExp(term);
                if (regex_term.test(html) === true) {
                    story.style.display = 'none';
                }
            }
        }
        lastRefresh = newRefresh;
    }

}

document.removeEventListener('scroll',filter_politics);
stories = document.getElementsByClassName('userContentWrapper');

for (var story of stories) {
    story.style.display = 'block';
}
