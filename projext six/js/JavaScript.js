$('video').mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});

const $myVideo = $('#vid');
const $spanelement = $(".span-element");
console.log($myVideo);

$myVideo.on('timeupdate', function () {   
    for (let i = 0; i < $spanelement.length; ++i) {
        if ((this.currentTime > parseFloat($spanelement.eq(i).attr("data-start"))) && (this.currentTime < parseFloat($spanelement.eq(i).attr("data-end")))) {
            $spanelement.eq(i).css("color", "blue");
        } else {
            $spanelement.eq(i).css("color", "black");
        }
    }
});

for (let j = 0; j < $spanelement.length; ++j) {
    $spanelement.eq(j).click(function(e) {
        for (let i = 0; i < $spanelement.length; ++i) {
            if ($(e.target).is($spanelement.eq(i))) {
                $myVideo[0].currentTime = $spanelement.eq(i).attr("data-start");    
            }
        }
    });
}