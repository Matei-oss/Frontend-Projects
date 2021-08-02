$(".form-test").validate({
    rules: {
        emailfield: {
            required: true,
            email: true
        }
    }
});