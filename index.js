function toggleFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "nav-container") {
    x.className += " responsive";
  } else {
    x.className = "nav-container";
  }
}

// let slideIndex = 0;

// function prev(){
//     slideIndex-- 
//     // showSlides()
// }

// function next(){
//     slideIndex++
//     // showSlides()
// }

// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 3000); // Change image every 2 seconds


// }

var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
    timeOut = timeOut - 20;

    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function prevSlide() {

    timeOut = 2000;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {

    timeOut = 2000;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// var heading = document.getElementById('heading')
// console.log(heading.innerHTML)

// const mediaQuery = window.matchMedia("(max-width: 1024px)");

// function handleMediaChange(event) {
//   if (event.matches) {
//     const h1Element = document.createElement("h1");
//     h1Element.textContent = heading.innerHTML;
//     h1Element.classList.add("heading-class");




//     const parentElement = document.getElementById("container");
//     const nextSibling = document.getElementById("img-id");

//     parentElement.insertBefore(h1Element, nextSibling);

//     // document.getElementById("container").appendChild(h1Element);
//     // Media query matches (screen size is less than or equal to 768 pixels)
//     console.log("Media query matches.");
//   } else {
//     // Media query does not match (screen size is greater than 768 pixels)
//     console.log("Media query does not match.");
//   }
// }

// mediaQuery.addEventListener('change', handleMediaChange);