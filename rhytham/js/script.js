$(document).ready(function() {
    $("#icon").click(function() {
        $(".navbar ul").slideToggle("slow");
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.site-header').addClass("sticky");
    } else {
        $('.site-header').removeClass("sticky");
    }
})