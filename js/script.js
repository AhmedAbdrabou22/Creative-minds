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

    const typingInterval  =setInterval(type, 500);
}





