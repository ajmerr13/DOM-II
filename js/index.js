// Your code goes here
const busImage = document.querySelector(".intro img");

busImage.addEventListener("mouseenter", () => {
  busImage.style.transform ="scale(1.2)";
  busImage.style.transition = "all 0.3s"
})
busImage.addEventListener("mouseleave", () => {
   busImage.style.transform ="scale(1)";
  busImage.style.transition = "all 0.3s"
}) 



document.querySelectorAll(".destination h4").forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor="#00ffff";
    })
  })

  document.querySelectorAll(".nav a").forEach(e =>{
    e.addEventListener("mouseenter", () =>{
        e.style.backgroundColor="#00ff00";
    })

  }) 
  
  
 
  const funHeader = document.querySelector(".intro h2");

  console.log(funHeader)

  funHeader.addEventListener("dblclick", () => {
    funHeader.style.backgroundColor = "#00ff00";
  })

  const funP = document.querySelector(".intro p");

  console.log(funP)

  funP.addEventListener("click", () => {
    funP.style.backgroundColor = "#023f00";
  })



  const contentSect = document.querySelector(".content-section");

  contentSect.addEventListener("mouseenter", () => {
    contentSect.style.backgroundColor = "#2354ff"

  })

  const textContSect = document.querySelector(".text-content");

  textContSect.addEventListener("mouseenter", () => {
      textContSect.style.backgroundColor = "#433454"
      event.stopPropagation();
  })



  const diffImg = document.querySelector(".content-destination img");
window.addEventListener("resize", () => {
   diffImg.src="img/corgi.jpg"
})

console.log(diffImg)

const diffText = document.querySelectorAll("p");
window.addEventListener("resize", () => {

    diffText.forEach(e =>{
            e.textContent = "DOGGY DOGGY WHAT NOW?"
        })
})

const diffImg2 = document.querySelector(".intro img");
window.addEventListener("resize", () => {
   diffImg2.src="img/corgi2.jpg"
})

const diffImg3 = document.querySelectorAll(".img-content img");
window.addEventListener("resize", () => {
   diffImg3.forEach(e =>{
       e.src="img/corgi3.jpg"
   })
})

const dogBus = document.querySelector(".main-navigation h1")

window.addEventListener("resize", () =>{
    dogBus.textContent = "Dog Bus!"
} )

const stopDefault = document.querySelector(".nav a");

stopDefault.addEventListener("resize", (event) => {
  event.preventDefault();
})

const dogintroh2 = document.querySelector(".intro h2")

window.addEventListener("resize", () =>{
    dogintroh2.textContent = "Welcome to the Dog Bus!"
} )

const dogTexth2 = document.querySelectorAll(".text-content h2")

    dogTexth2.forEach(e =>{
        window.addEventListener("resize", () =>{
            e.textContent = "Lets go for a walk!"
  })
})

const dogTexth4 = document.querySelectorAll(".destination h4")

    dogTexth4.forEach(e =>{
        window.addEventListener("resize", () =>{
            e.textContent = "BOW WOW WOW"
  })
})

const dogBtn = document.querySelectorAll(".btn")

    dogBtn.forEach(e =>{

        window.addEventListener("resize", ()=>{
            e.textContent = "Woof Woof!"
        })

    })

    console.log(dogBtn)