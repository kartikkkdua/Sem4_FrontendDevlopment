$(document).ready(function() {
    $("#showButton").click(function() {
        $("#content").show();
    });

    
    $("#hideButton").click(function() {
        $("#content").hide();
    });


    $("#toggleButton").click(function() {
        $("#content").toggle();
    });
});