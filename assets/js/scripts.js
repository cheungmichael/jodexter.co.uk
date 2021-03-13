$(function() {
    $( "#modal" ).dialog({
        autoOpen: false,
        height: 600,
        width: 800,
        modal: true,
open: function( event, ui ) {
$("iframe").css("visibility", "hidden");
},

close: function( event, ui ) {
$("iframe").css("visibility", "visible");
}
    });

$( ".modal-open" ).click(function() {
    $( "#modal" ).dialog( "open" );
    return false;
});
$(".ui-dialog").addClass("clear");

$( ".accordion" ).accordion({
    collapsible: true,
    heightStyle: "content"
});


$('.mlr input').each(function() {
    var inputval = $(this).attr('value');
    $(this).focus(function() {
        if ($(this).val() == inputval) {
            $(this).val('');
        }
    });
    $(this).blur(function() {
        if ($(this).val() == '') {
            $(this).val($(this).attr('value'));
        }
    });
});

$('textarea').focus(function() {
    if ($(this).val() == 'Enter enquiry') {
        $(this).val('');
    }
});
$('textarea').blur(function() {
    if ($(this).val() == 'Enter enquiry') {
        $(this).val('');
    }
});

});