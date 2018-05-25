//scrolling title
$(document).ready(function() {
    var boxwidth = $("div.caption").width();
    $("a.title").hover(
        function() {
            $(this).stop().animate({
                textIndent: "-" + ($(this).width() - $(this).parent().width()) + "px"
            }, 2000);
        },
        function() {
            $(this).stop().animate({
                textIndent: "0"
            }, 1000);
        }
    );
});
