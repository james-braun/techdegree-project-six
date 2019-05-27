// style the video with medis element player plugin.
$('video').mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});

// As the video plays highlight portions of th text.
$('video').on('timeupdate', function () {   
    for (let i = 0; i < $('span').length; ++i) {
        if ((this.currentTime > parseFloat($('span').eq(i).attr("data-start"))) && (this.currentTime < parseFloat($('span').eq(i).attr("data-end")))) {
            $('span').eq(i).css("color", "blue");
        } else {
            $('span').eq(i).css("color", "black");
        }
    }
});

// If a portion of the text is clicked start playing
// the video at that location
for (let j = 0; j < $('span').length; ++j) {
    $('span').eq(j).click(function() {
        $('video')[0].currentTime = $(this).attr("data-start");
    });
}