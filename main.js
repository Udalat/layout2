const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("div.navigation");
const Xbuton = document.querySelector("div.navigation i");
const grayed = document.querySelector(".grayed");
const prev = document.querySelector(".fa-angle-left");
const next = document.querySelector(".fa-angle-right");
const Slide = [...document.querySelectorAll(".slide")];
const Heading = document.querySelectorAll(".heading");
const Paragraph = document.querySelectorAll(".paragraph");
let slideNo = 0


hamburger.addEventListener("click", () => {navigation.classList.toggle("visibilityNav"); grayed.classList.toggle("visibility")});
Xbuton.addEventListener("click", () => {navigation.classList.toggle("visibilityNav");grayed.classList.toggle("visibility")});


function changeSlides(clickAction){
    Slide.forEach( (index) => {
        index.classList.add("visibility")
     });
     Heading.forEach( (index) => {
         index.classList.add("visibility")
      });
      Paragraph.forEach( (index) => {
         index.classList.add("visibility")
      });

if (clickAction == "nextSlide"){
    slideNo++;
    if (slideNo >= Slide.length){
        slideNo = 0;
    };
    
};
if (clickAction == "prevSlide"){
    
    if (slideNo <= 0){
        slideNo = Slide.length;
    };
    slideNo--;
     Slide[slideNo].classList.remove('visibility')
    
};
Slide[slideNo].classList.remove('visibility')
Heading[slideNo].classList.remove('visibility')
Paragraph[slideNo].classList.remove('visibility')
}

next.addEventListener("click", function(){changeSlides("nextSlide")});
prev.addEventListener("click", function(){changeSlides("prevSlide")});




if(document.body.offsetWidth >= 700){
    no=1;
Slide.forEach((index) =>{
    
    index.setAttribute("src", `images/desktop-image-hero-${no++}.jpg`)
    console.log(index)
})
}


window.addEventListener("resize", e => {
    if(document.body.offsetWidth >= 700){
        no=1;
    Slide.forEach((index) =>{
        
        index.setAttribute("src", `images/desktop-image-hero-${no++}.jpg`)
    })}


    else {
        no=1;
        Slide.forEach((index) =>{
            index.setAttribute("src", `images/mobile-image-hero-${no++}.jpg`)
            }
        )
    }

})

