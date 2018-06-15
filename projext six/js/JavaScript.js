$('video').mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});

const myVideo = document.getElementById('vid');
const spanelement = document.querySelectorAll(".span-element");

myVideo.addEventListener('timeupdate', () => {    
    for (let i = 0; i < spanelement.length; i++) {
        if ((myVideo.currentTime > parseFloat($(spanelement[i]).attr("data-start"))) && (myVideo.currentTime < parseFloat($(spanelement[i]).attr("data-end")))) {
            spanelement[i].style.color = "blue";
        } else {
            spanelement[i].style.color = "black";
        }
    }
});

for (let i = 0; i < spanelement.length; i++) {
    spanelement[i].addEventListener('click', () => {
        myVideo.currentTime = parseFloat($(spanelement[i]).attr("data-start"));
    });
}