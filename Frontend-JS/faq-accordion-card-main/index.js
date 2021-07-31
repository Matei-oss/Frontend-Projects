// $('.accordion-button').click(function(e) {
//     $(this).css('font-weight', '700');
// });

$(".accordion-button").on("click", function() { // attach to Click event
    $(".accordion-button").removeClass("active"); // reset all <li> to no active class
    $(this).addClass("active"); // add active class to this <li> only
});