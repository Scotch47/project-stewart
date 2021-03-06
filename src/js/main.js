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


    $('.select-mult').select2({
        multiple: true,
        placeholder: "",

    });


    $('.select-cust').select2();



    // configurator
    $('.custom-select').select2();


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



// Or with jQuery



$(document).ready(function () {
    if ($("#preloader").length) {

        $(".dws-progress-bar").circularProgress({
            color: "#117BC1",
            line_width: 5,
            height: "250px",
            width: "250px",
            percent: 0,
            // counter_clockwise: true,
            starting_position: 25
        }).circularProgress('animate', 100, 2800);
    }

    $(window).on('load', function () {
        var $preloader = $('#preloader');
        $preloader.delay(3400).fadeOut('slow');
    });


    // drop-pricing
    $('.dropdown-trigger').dropdown({
        closeOnClick: false,
        autoTrigger: false,
        coverTrigger: false,
    });


    $('.dropdown-trigger-dataBase').dropdown({
        closeOnClick: false,
    });
    
    $('.dropdown-close').on('click', function () {
        $('.dropdown-trigger').dropdown('close')

    })
}); 

$('.dropCurrToggle').on('click', function () {
    $('.drop-cont-curr').toggle('hide');

});

$('.dropRegToggle').on('click', function () {
    $('.drop-reg-cont').toggle('hide');

});

$('.dropdown-trigger-price').dropdown({
    closeOnClick: false,
});


$('.modal').modal();

