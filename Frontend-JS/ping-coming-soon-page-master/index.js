$(".form-control").validate({
    rules: {
        emailfield: {
            required: true,
            email: true
        }
    }
});