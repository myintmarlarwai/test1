$(document).ready(function() {
        $('html, body').hide();

        if (window.location.hash) {
            setTimeout(function() {
                $('html, body').scrollTop(0).show();
                var head_h=$(window.location.hash).offset().top - ($(".header").height() + 25);
                $('html, body').animate({
                    scrollTop: head_h
                    }, 1500)
            }, 0);
        }
        else {
            $('html, body').show();
        }
    });
$(document).ready(function() {
	$('.bxslider').bxSlider({
      auto: true,
      autoControls: true
    });
});