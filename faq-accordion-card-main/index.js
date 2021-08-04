// $('.accordion-button').click(function(e) {
//     $(this).css('font-weight', '700');
// });

$(".accordion-button").on("click", function() { // attach to Click event
    $(".accordion-button").removeClass("active"); // reset active class for all elements
    $(this).addClass("active"); //set active class only for this element
});