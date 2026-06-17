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
