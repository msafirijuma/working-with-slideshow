
let slideIndex = 1;

const controlSlide = (n) => {
    showSlides(slideIndex += n)
}


const showSlides = n => {
    let slides = document.querySelectorAll(".slides");
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);


// AUTO SLIDESHOW


let index = 0;

const showAutoSlides = () => {
    const myslides = document.querySelectorAll(".myslides");

    for (let slide of myslides) {
        slide.style.display = "none";
    }

    index++;

    if (index > myslides.length) {
        index = 1;
    }


    myslides[index - 1].style.display = "block";
    setTimeout(showAutoSlides, 2000)
}

showAutoSlides();

// pin code : 0408


















