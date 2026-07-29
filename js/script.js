/* =====================================================
   ASCENT STREETWEAR V2
   CLEAN JAVASCRIPT
===================================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.classList.add("hide");

        }, 800);

    }

});

/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {


    menuToggle.addEventListener("click", () => {


        navLinks.classList.toggle("active");


        menuToggle.classList.toggle("open");


    });



    // Close menu after clicking a link

    document.querySelectorAll(".nav-links a")
    .forEach(link => {


        link.addEventListener("click", () => {


            navLinks.classList.remove("active");

            menuToggle.classList.remove("open");


        });


    });


}





/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */


const navbar = document.querySelector(".navbar");


if(navbar){


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 50){


            navbar.classList.add("scrolled");


        }else{


            navbar.classList.remove("scrolled");


        }


    });


}





/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */


const revealElements =
document.querySelectorAll(
".section, .product-card, .community-card"
);



const revealObserver =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("fade-up");


            revealObserver.unobserve(entry.target);


        }


    });


},
{
    threshold:.15
});



revealElements.forEach(element=>{


    revealObserver.observe(element);


});







/* =====================================================
   HERO IMAGE SLIDER
===================================================== */


const heroImages =
document.querySelectorAll(".hero-image");



let currentHero = 0;



if(heroImages.length > 1){


    heroImages.forEach((image,index)=>{


        image.style.opacity =
        index === 0 ? "1" : "0";


        image.style.transition =
        "opacity .8s ease";


    });



    setInterval(()=>{


        heroImages[currentHero]
        .style.opacity="0";


        currentHero =
        (currentHero + 1)
        %
        heroImages.length;



        heroImages[currentHero]
        .style.opacity="1";



    },5000);


}







/* =====================================================
   IMAGE LAZY LOADING
===================================================== */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.loading="lazy";


});







/* =====================================================
   FLOATING FACEBOOK BUTTON
===================================================== */


const facebookButton =
document.querySelector(".floating-btn");



if(facebookButton){


    facebookButton.addEventListener(
    "click",
    ()=>{


        window.open(
        facebookButton.href,
        "_blank"
        );


    });


}







/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */


document
.querySelectorAll(".btn")
.forEach(button=>{


    button.addEventListener(
    "click",
    function(e){


        const ripple =
        document.createElement("span");


        ripple.classList.add("ripple");


        this.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },600);



    });



});







/* =====================================================
   CURRENT YEAR FOOTER
===================================================== */


const year =
document.querySelector(".year");



if(year){


    year.textContent =
    new Date()
    .getFullYear();


}





console.log(
"ASCENT V2 loaded successfully 🚀"
);