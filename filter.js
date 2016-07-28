var stories = document.getElementsByClassName('userContentWrapper');
var terms = ['trump','clinton','bernie','obama','biden','dws','democrat','republican','dnc','rnc','election','terrorist','murica','countries','tpp','protest','elections','republic','election','government','president','infowars','liberatarian','hilary','stein','socialist','comunist','fuck','taxes','immigrant','mexico','wall','democracy','vote','anarchy','anarchist','livesmatter','occupy','citizen','deficit','elect','isolationism'];
var lastRefresh = null;


function filter_politics(timestamp) {

    var newRefresh = timestamp.timeStamp;
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
filter_politics(0);
document.addEventListener('scroll',filter_politics);


