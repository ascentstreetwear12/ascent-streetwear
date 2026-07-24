// ASCENT STREETWEAR V2

// Smooth fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold:0.15
});

sections.forEach((section)=>{
    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="all .8s ease";
    observer.observe(section);
});

// Navbar background on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){
        nav.style.background="rgba(0,0,0,.95)";
        nav.style.boxShadow="0 5px 25px rgba(0,0,0,.4)";
    }else{
        nav.style.background="rgba(0,0,0,.85)";
        nav.style.boxShadow="none";
    }

});

// Button ripple effect
document.querySelectorAll(".btn, .buy-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px) scale(1.03)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});
