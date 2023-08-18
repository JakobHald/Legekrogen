let hamburger = document.querySelector('#burger')
let navUl = document.querySelector('.nav-ul')


hamburger.addEventListener('click', show =>{
    navUl.classList.toggle('show')
})

navUl.addEventListener('click', () =>{
    navUl.classList.remove('show')
})

const slideData = [
    {
        "source" : "./assets/heros/forsiden.jpg",

    },
    {
        "source" : "./assets/heros/forsiden2.jpg",

    },
    {
        "source" : "./assets/heros/forsiden3.jpg",

    }
];

const slideContainer = document.querySelector('.slides');

slideData.forEach(slide =>{
    slideContainer.innerHTML += 
    `
    <div class="single-slide">
        <img src="${slide.source}" alt="${slide.alt}">
    </div>

    `;
})


const slides = document.querySelectorAll('.single-slide'); // Henter hvert enkelt billede fra index

let slideLength = slides.length - 1;
let currentImageIndex = 0;

const display = document.querySelector('.display');

const setActiveSlide = (index) =>{

    slides.forEach ((element) =>{
        element.classList.remove('active')
    });

    slides[index].classList.add('active');
}

const next = () =>{
    (currentImageIndex >= slideLength) ? currentImageIndex = 0 : currentImageIndex += 1;
    setActiveSlide(currentImageIndex);
}

setInterval(next, 3000)
setActiveSlide(currentImageIndex);


let form = document.querySelector('form');
let message = document.querySelector('.msg')

const msgTmpl = (msg) =>
`
<p>${msg}</p>

`;

form.addEventListener('submit', (e) => {
    e.preventDefault();

        form.classList.add('hidden')
        message.innerHTML = msgTmpl(`YAY din bruger er nu oprettet. Velkommen`);

})
