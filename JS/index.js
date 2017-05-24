// Mobile responsive menu

$(document).ready(function(){
    $("nav ul li:first-child").click(function(){
        console.log("hamburger menu clicked!");
        // $("ul li a").slideToggle();
        $("nav").toggleClass("open");
    });

    $("nav ul li a").click(function(){
        console.log("hamburger menu clicked!");
        // $("ul li a").slideToggle();
        $("nav").toggleClass(".class");
    });
});
