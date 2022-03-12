//scroll
let arrowUp = document.querySelector(".arrow-up");
let bodyScroll = document.querySelector("html , body");
window.onscroll = function () {
  if (bodyScroll.scrollTop >= 500) {
    arrowUp.style.display = "block";
    arrowUp.onclick = function () {
      bodyScroll.scrollTo(0, 0);
    };
  } else {
    arrowUp.style.display = "none";
  }
};

//nav bar
let ancor = document.querySelectorAll(".anchor");
ancor.forEach((ele) => {
  ele.onclick = function () {
    ancor.forEach(function (ele) {
      ele.classList.remove("actived");
    });
    this.classList.add("actived");
  };
});

//show more
let iconPlus = document.querySelectorAll(".fa-plus");
let iconMinus = document.querySelectorAll(".fa-minus");
iconPlus.forEach((el) => {
  el.addEventListener("click", function () {
    if ((this.style.display = "block")) {
      this.style.display = "none";
      this.nextElementSibling.style.display = "block";
    }
    this.parentElement.nextElementSibling.classList.toggle("dis");
  });
});
iconMinus.forEach((ele) => {
  ele.addEventListener("click", function () {
    if ((this.style.display = "block")) {
      this.style.display = "none";
      this.previousElementSibling.style.display = "block";
    }
    this.parentElement.nextElementSibling.classList.toggle("dis");
  });
});


let content = document.querySelectorAll(".common-question .content");

let conSpreads = document.querySelector(".content.spreads");
let liSpreadse = document.querySelector(".right-ul .spreads");
liSpreadse.addEventListener("click", function () {
  content.forEach((ele) => {
    ele.style.display = "none";
  });
  if ((conSpreads.style.display = "none")) {
    conSpreads.style.display = "block";
  }
});

let conDisease = document.querySelector(".content.disease");
let liDisease = document.querySelector(".right-ul .disease");
liDisease.addEventListener("click", function () {
  content.forEach((ele) => {
    ele.style.display = "none";
  });
  if ((conDisease.style.display = "none")) {
    conDisease.style.display = "block";
  }
});

let conProtects = document.querySelector(".content.protects");
let liProtects = document.querySelector(".right-ul .protects");
liProtects.addEventListener("click", function () {
  content.forEach((ele) => {
    ele.style.display = "none";
  });
  if ((conProtects.style.display = "none")) {
    conProtects.style.display = "block";
  }
});

let conSymptom = document.querySelector(".content.symptom");
let liSymptom = document.querySelector(".right-ul .symptom");
liSymptom.addEventListener("click", function () {
  content.forEach((ele) => {
    ele.style.display = "none";
  });
  if ((conSymptom.style.display = "none")) {
    conSymptom.style.display = "block";
  }
});


let conOutbreak = document.querySelector(".content.outbreak");
let liOutbreak = document.querySelector(".right-ul .outbreak");
liOutbreak.addEventListener("click", function () {
  content.forEach((ele) => {
    ele.style.display = "none";
  });
  if ((conOutbreak.style.display = "none")) {
    conOutbreak.style.display = "block";
  }
});

let conBusters = document.querySelector(".content.busters");
let liBusters = document.querySelector(".right-ul .busters");
liBusters.addEventListener("click", function () {
  content.forEach((ele) => {
    ele.style.display = "none";
  });
  if ((conBusters.style.display = "none")) {
    conBusters.style.display = "block";
  }
});