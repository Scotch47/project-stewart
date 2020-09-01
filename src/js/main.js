$(function () {
    // select 2
// select state
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        console.log(state.element.dataset);
        var $state = $(
            '<span><img src="' + state.element.dataset.img_src.toLowerCase() + '" class="img-flag"  /> ' + state.text + '</span>'
        );
        return $state;

    };

    $('.country-select').select2({
        templateResult: formatState,
        templateSelection: formatState,
        placeholder: "",
        dropdownParent: $('.search-select'),


    });

    // select payment    
    function formatPayment(payment) {
        if (!payment.id) {
            return payment.text;
        }
        var $payment = $(
            '<span><img src="' + payment.element.dataset.img_src.toLowerCase() + '" class="img-payment"  /> ' + payment.text + '</span>'
        );
        return $payment;

    };

    $('.payment-select').select2({
        templateResult: formatPayment,
        templateSelection: formatPayment,
    });  

    $('.select-cust').select2();  
    

});



function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('#file_upload')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}