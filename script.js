$(function(){
    $(".accordion").click(function(){
        var pnl = $(".panel");
        $(this).toggleClass("active"); //обращение к конкретному элементу с классом .accordion 
        $(this).next().slideToggle("slow"); // обращение к конкретному элементу который идет next после .accordion в DOM
    });
});