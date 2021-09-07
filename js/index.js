$(document).ready(function() {
    $(".questions-block__visible-item").click(function() {
        $(this).siblings(".questions-block__hidden-item").slideToggle(400);
        $(this).children(".fas").toggleClass("fa-caret-up fa-caret-down")
    });

});
