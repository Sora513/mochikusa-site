$(function () {

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        $(".toppage-top").each(function(){
            this.css({background-color: red})
        })
        console.log(scroll)
    })
});