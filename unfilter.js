document.removeEventListener('scroll',filter_politics);
stories = document.getElementsByClassName('userContentWrapper');

for (var story of stories) {
    story.style.display = 'block';
}
