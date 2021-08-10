//change color of percent buttons after click
$('.btn.tip-percent').click(function() {
    $('.btn.tip-percent').removeClass('onclick')
    $(this).addClass('onclick');
});

//change color of reset button after click
$('.btn.tip-percent-r').click(function() {
    $('.btn.tip-percent-r').removeClass('onclick')
    $(this).addClass('onclick');
});

//calculate tip amounts per person and total
$('.amount-input.input-person,.btn,.custom-input').on('click', function() {
    if ($('.custom-tip').val().length === 0) {
        var tipPercentage = parseInt($(this).val());
    } else {
        var tipPercentage = $('.custom-tip').val();
    }
    var billAmount = parseInt($('.amount-input.input-dollar').val());
    var numberOfPeople = parseInt($('.amount-input.input-person').val());
    var tipAmount = ((billAmount / 100) * tipPercentage) / numberOfPeople;
    var tipTotal = tipAmount * numberOfPeople;
    $('.result')[0].innerHTML = "$" + tipAmount;
    $('.result')[1].innerHTML = "$" + tipTotal;
});

//reloads page when reset button is clicked
$('.tip-percent-r').click(function() {
    $('.result')[0].innerHTML = "$" + 0;
    $('.result')[1].innerHTML = "$" + 0;
});