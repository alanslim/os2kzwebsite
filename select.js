$(document).ready(function(){
    $('.brand-data-select').on('change', function(){
        var selectedOption = $(this).val();
        $('.prod1').not(selectedOption).fadeOut(function(){
            $(selectedOption).fadeIn();
        });
    });
});
