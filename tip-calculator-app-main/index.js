$('.btn.tip-percent').click(function() {
    $('.btn.tip-percent').removeClass('onclick')
    $(this).addClass('onclick');
});

$('.btn.tip-percent-r').click(function() {
    $('.btn.tip-percent-r').removeClass('onclick')
    $(this).addClass('onclick');
});



function getPercentage() {
    $(".btn").click(function() {
        var tipPercentage = parseInt($(this).val());
        console.log(tipPercentage)
        return tipPercentage;
    })
};


$('.amount-input.input-person').keyup(function(tipPercentage) {
    var billAmount = parseInt($('.amount-input.input-dollar').val());
    var numberOfPeople = parseInt($('.amount-input.input-person').val());

    var tipAmount = ((billAmount / 100) * 10) / numberOfPeople;
    $('.result')[0].innerHTML = "$" + tipAmount;
});