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
                items: 1
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




// document.getElementById('username').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
//     document.querySelector('.subscripe').classList.toggle('s');
//     document.querySelectorAll('.frame').forEach((ele)=>{
//         ele.classList.toggle('frameData')
//     })
// });


let achiveNumbers = document.querySelectorAll('.achiveNumber')

// console.log(achiveNumbers);

window.onscroll = ()=>{
    if(window.scrollY === 1000){
        let num1 = 0;
        achiveNumbers.forEach((ele)=>{
            let time= setInterval(()=>{
                num1 +=1;
                ele.innerHTML ="+" + num1
                if(+ele.innerHTML < +ele.getAttribute('value')){
                    ele.innerHTML ="+" + num1
                }else{
                    clearInterval(time)
                }
            } , 20)
        })
    }
}