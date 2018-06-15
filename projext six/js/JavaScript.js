$('video').mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});

const vid = document.getElementById('vid');
const spanelems = document.querySelectorAll(".span-element");

vid.addEventListener('timeupdate', () => {    
    for (let i = 0; i < spanelems.length; i++) {
        if ((vid.currentTime > parseFloat($(spanelems[i]).attr("datastart"))) && (vid.currentTime < parseFloat($(spanelems[i]).attr("dataend")))) {
            spanelems[i].style.color = "yellow";
        } else {
            spanelems[i].style.color = "black";
        }
    }
});

for (let i = 0; i < spanelems.length; i++) {
    spanelems[i].addEventListener('click', () => {
        vid.currentTime = parseFloat($(spanelems[i]).attr("datastart"));
    });
}