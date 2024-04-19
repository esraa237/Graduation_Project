//variables for nav
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn"),
  //variables for login form
  formOpenBtn = document.querySelector("#form-open"),
  LContainer = document.querySelector(".login-container"),
  formContainer = document.querySelector(".form-box"),
  formCloseBtn = document.querySelector(".form-close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  //variables for confirmed password
  password = document.getElementById("password2"),
  confirm_password = document.getElementById("confirm_password"),
  //variables for signup multi levels
  slidePage = document.querySelector(".slide-page"),
  nextBtnFirst = document.querySelector(".firstNext"),
  prevBtnSec = document.querySelector(".prev-1"),
  nextBtnSec = document.querySelector(".next-1"),
  prevBtnThird = document.querySelector(".prev-2"),
  progressText = document.querySelectorAll(".step p"),
  submitBtn = document.querySelector(".Sign-Up"),
  progressCheck = document.querySelectorAll(".step .check"),
  bullet = document.querySelectorAll(".step .bullet");
  let current = 1;

  //funstions for nav bar
  searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
      return searchIcon.classList.replace("fa-magnifying-glass", "fa-xmark");
    }
    searchIcon.classList.replace("fa-xmark","fa-magnifying-glass");
  });
  
  navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
  });
  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
  });
//functions for login form
formOpenBtn.addEventListener("click", () =>  LContainer.classList.add("show"));
formCloseBtn.addEventListener("click", () =>  LContainer.classList.remove("show"));

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
//functions for confirmed password

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//functions for signup multi levels
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active1");
  progressCheck[current - 1].classList.add("active1");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});
nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-36.5%";
  bullet[current - 1].classList.add("active1");
  progressCheck[current - 1].classList.add("active1");
  current += 1;
});

nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-72.5%";
  bullet[current - 1].classList.add("active1");
  progressCheck[current - 1].classList.add("active1");
  current += 1;
});


prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active1");
  progressCheck[current - 2].classList.remove("active1");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-36.5%";
  bullet[current - 2].classList.remove("active1");
  progressCheck[current - 2].classList.remove("active1");
  current -= 1;
});
