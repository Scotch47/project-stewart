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


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
//   });

// Or with jQuery

$('.dropdown-trigger').dropdown({
    constrainWidth: true,
});

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
        }).circularProgress('animate', 100, 2000);
    }

    $(window).on('load', function () {
        var $preloader = $('#preloader');
        $preloader.delay(3400).fadeOut('slow');
    });


});