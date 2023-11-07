const searchBtn = document.querySelector("#search-btn")
const searchForm = document.querySelector(".search-form")
const loginForm = document.querySelector(".login-form")
const menuBar = document.querySelector("#menu-bar")
const nav = document.querySelector("nav")
const video = document.querySelectorAll(".video")
const trip = document.querySelector(".trip")
const forms = document.querySelectorAll("form")
const inputPlace = document.querySelector(".input-place")
const option = document.querySelectorAll("option")

function showbar(){
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")

}
function showform(){
    loginForm.classList.add("active")

}
function hideForm(){
    loginForm.classList.remove("active")

}
function showmenu(){
    menuBar.classList.toggle("fa-times")
    nav.classList.toggle("active")
}

 
var swiper = new Swiper(".review-slider", {
    spaceBetween :20 ,
    loop: true,
    autoplay: {
        delay:2000,
    },
   
});

 
forms.forEach(form =>{
   form.addEventListener("submit" , (e) =>{
        e.preventDefault();
        
    })

})


const logo = document.querySelector(".logo")
logo.addEventListener("click" , ()=>{
    window.open("./home.html")
})


let noofChar = 50
let paragraphs = document.querySelectorAll(".paragraph")
paragraphs.forEach(para =>{
    if(para.textContent.length < noofChar){
        para.nextElementSibling.style.display = "none"
    }
    else{
        let displayText = para.textContent.slice(0,noofChar)
        let moreText = para.textContent.slice(noofChar)
        para.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`
    }
})
function readMore(btn){
    let post =  btn.parentElement
    post.querySelector(".dots").classList.toggle("hide")
    post.querySelector(".more").classList.toggle("hide")
    btn.textContent == "Read More" ? btn.textContent = "Read less" : btn.textContent = "Read More"

}



 fetch("home.json")
.then(res => res.json())
.then(data => {
    let dataAsString = JSON.stringify(data)
    localStorage.setItem('trips' , dataAsString)
    dataAsString = localStorage.getItem('trips')   
})
 
const getTrips = async () => {
    const res = await fetch('home.json')
    const data = await res.json()
    const Data = data.Trips
       Data.forEach(ele => {
        trip.innerHTML += 
        `
        <div class="group d-flex flex-column align-items-start" >
             <div class="content-img"><img class="trip-img" src= "${ele.image}"></div>
              <div class="trip-information">
                  <h2 class ="title"  id=${ele.id}>${ele.title}</h2>
                  <p>Arrival: ${ele.Arrival}</p>
                  <p>Leaving: ${ele.Leaving}</p>
                  <span class="price">price: $${ele.price}</span> 
                 </div>
                <div>
                   <button class="btn">Book</button>
                </div>
        </div>`
    });
}

getTrips()


trip.addEventListener("click" , () =>{
        window.open("./book.html")
})

let myAudio = document.querySelector(".my-audio")
myAudio.volume = 0.1

