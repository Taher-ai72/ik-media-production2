document.addEventListener("DOMContentLoaded", () => {
    const textGroups = document.querySelectorAll("#page-2 .text-group");
    const dividerLine = document.querySelector(".divider-line");
    const video = document.getElementById("video");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate text groups
                    textGroups.forEach((group, index) => {
                        group.style.animation = `verticalSlide 1s ease-out ${index * 0.5}s forwards`;
                    });

                    // Animate the divider line
                    dividerLine.style.height = "20px"; /* Set the final height of the line */
                    dividerLine.style.opacity = "1";
                    dividerLine.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of page-2 is visible
    );

    const page2 = document.getElementById("page-2");
    observer.observe(page2);

    // Swiper initialization
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,  // Removed space between slides
        loop: true,
        width: null,      // Let Swiper calculate width automatically
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
});

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.text-group').forEach((group) => {
    observer.observe(group);
});
