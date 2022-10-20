const elBtn = document.querySelector(".btn-js");
const elNav = document.querySelector(".header__nav");
const darkLogo = document.querySelector(".dark__logo");
const heroVedio = document.querySelector(".hero__vedio");
const heroIframe = document.querySelector(".hero__iframe");


elBtn.addEventListener("click" , function(){
    elBtn.closest(".header").classList.toggle("shownav")
    elNav.classList.add("shownav");
    // darkLogo.classList.toggle("shownav");
    
});

heroVedio.addEventListener("click" , function(){
    heroIframe.classList.toggle("shownav");
});

// $('.carousel-block').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });


$('.carousel-block').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    variableWidth: true,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});