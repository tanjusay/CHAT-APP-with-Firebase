function closeOffcanvasAndScrollToSection(sectionId) {
    // Close the offcanvas
    var offcanvas = document.getElementById('offcanvasRight');
    var offcanvasObj = bootstrap.Offcanvas.getInstance(offcanvas);
    if (offcanvasObj) {
        offcanvasObj.hide();
    }

    setTimeout(function() {
        var targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    },0); //delay time
}

let particle = document.getElementById('box');

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const movement = scrollY * -.25 ; //speed
    
    particle.style.transform = `translateY(${movement}px)`;
});
