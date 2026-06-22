document.addEventListener("DOMContentLoaded", () => {


// Smooth form handling (no backend needed)
const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Booking submitted successfully! VR Pulse will contact you soon.");
        form.reset();
    });
});


});
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

if(hamburger){

    hamburger.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}
