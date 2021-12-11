$(function(){

if($(window).width()<900){
    $(".float-left").before($(".float-right").prop("outerHTML"))
    $(".float-right:last").remove()
}
});