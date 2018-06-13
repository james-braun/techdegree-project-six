$('video').mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});
const vid = document.getElementsByTagName("video");



function myFunction(x) {
    if (x.matches) {
        vid[0].setAttribute('style', '"width: 960px; height: 540px;"');
        //vid[0].setAttribute('height', '540px');
        
    } else {
        vid[0].setAttribute('style', '"width: 480px; height: 270px;"');
        //vid[0].setAttribute('height', '270px');
 
    }
}
var x = window.matchMedia("(min-width: 768px)");
myFunction(x);
x.addListener(myFunction);