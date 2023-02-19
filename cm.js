// Add active class to current section
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", function() {
    const scrollPos = window.scrollY + (window.innerHeight / 2);
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});

// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll("header nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        const targetPos = target.offsetTop;
        const startPos = window.pageYOffset;
        const distance = targetPos - startPos;
        let startTime = null;
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPos, distance, 600);
            window.scrollTo(0, run);
            if (timeElapsed < 600) requestAnimationFrame(animation);
        }
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animation);
    });
});
