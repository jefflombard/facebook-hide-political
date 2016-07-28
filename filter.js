var stories = document.getElementsByClassName('userContentWrapper');
var terms = ['trump','clinton','bernie','obama','biden','dws','democrat','republican','dnc','rnc','election','terrorist','murica','countries','tpp','protest','elections','republic','election','government','president','infowars','liberatarian','hilary','stein','socialist','comunist','fuck','taxes','immigrant','mexico','wall','democracy','vote','anarchy','anarchist','livesmatter','occupy','citizen','deficit','elect','isolationism'];
var lastRefresh = null;


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
document.addEventListener('scroll',filter_politics);
