$(".form-mail").validate({
    rules: {
        emailfield: {
            required: true,
            email: true
        }
    }
});