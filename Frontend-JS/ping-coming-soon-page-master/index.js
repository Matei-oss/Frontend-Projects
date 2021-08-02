$(document).ready(function() {

    $('.btn').click(function() {

        $(".error").hide();
        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailblockReg =
            /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;

        var emailaddressVal = $("#UserEmail").val();
        if (emailaddressVal == '') {
            $("#UserEmail").after('<span class="error">Please enter your email address.</span>');
            hasError = true;
        } else if (!emailReg.test(emailaddressVal)) {
            $("#UserEmail").after('<span class="error">Enter a valid email address.</span>');
            hasError = true;
        } else if (!emailblockReg.test(emailaddressVal)) {
            $("#UserEmail").after('<span class="error">No yahoo, gmail or hotmail emails.</span>');
            hasError = true
        }

        if (hasError == true) { return false; }

    });
});