$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
            // Add more breakpoints if needed
        }
    });
});


window.onload = () => {
    const textElement = document.getElementById('text');
    const textToType = "APPS";
    let index = 0;

    function type() {
        textElement.textContent = textToType.slice(0, index);
        index++;

        if (index > textToType.length) {
            clearInterval(typingInterval);
        }

    }

    const typingInterval = setInterval(type, 500);
}




