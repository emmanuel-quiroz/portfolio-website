//add shadow to navbar on scroll down
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
     if (scroll > 15) {
        $(".navbar").addClass("navbarShadow");
    }
    else {
        $(".navbar").removeClass("navbarShadow");
    }
});



//animate icons by adding animated classes
function animateIcons () {
    //Programming languages 
    var iconsListLang = document.querySelectorAll(".lang div");
    iconsListLang[0].classList.add("animated" , "fadeInDown");
    iconsListLang[1].classList.add("animated" , "fadeInRight");
    iconsListLang[2].classList.add("animated", "fadeInUp");
    iconsListLang[3].classList.add("animated", "fadeInRight");

    //Frameworks 
    var iconsListFrameworks = document.querySelectorAll(".frame div");
    iconsListFrameworks[0].classList.add("animated" , "fadeInLeft");
    iconsListFrameworks[1].classList.add("animated" , "fadeInRight");
    iconsListFrameworks[2].classList.add("animated" , "fadeInRight");
    iconsListFrameworks[3].classList.add("animated" , "fadeInRight");

    //Tools 
    var iconsListTools = document.querySelectorAll(".tools div");
    iconsListTools[0].classList.add("animated" , "fadeInLeft");
    iconsListTools[1].classList.add("animated" , "fadeInRight");
    iconsListTools[2].classList.add("animated", "fadeInDown");
    iconsListTools[3].classList.add("animated", "fadeInRight");


}

animateIcons();




console.log("All tests passed.");