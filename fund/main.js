const menu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".menu-container");
const buttons = document.querySelectorAll("[data-open-modal]");
const modal = document.querySelector(".modal");
const boxes = document.querySelectorAll(".pledge-box");
const radios = document.querySelectorAll(".pledge-radios");
const continue1 = document.querySelectorAll("[data-continue]");
const completed1 = document.querySelector(".completed");
const gotIt = document.querySelector("[data-finish]");
const money = document.querySelectorAll(".money");
let errors = document.querySelectorAll(".errors");
const left4 = document.querySelector(".left4");
const left3 = document.querySelector(".left3");
const left2 = document.querySelector(".left2");
const left1 = document.querySelector(".left1");
const prizes = document.querySelectorAll(".prize");
const specialButton = document.querySelectorAll(".tick");
const closeModal = document.querySelector(".closeModal");
let book = document.querySelector(".book");
const icon = document.querySelector(".icon");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("flex");
  container.classList.toggle("flex");
  hamburger.classList.toggle("close");
});

buttons.forEach((open) => {
  open.addEventListener("click", () => {
    modal.classList.toggle("none");
    container.classList.toggle("flex");
  });
});
if (!modal.classList.contains(".none")) {
  document.addEventListener("click", (e) => {
    if (e.target === container) {
      modal.classList.add("none");
      container.classList.toggle("flex");
    }
  });
}

const calc = () => {
  let progress = document.querySelector(".progress-value");
  let amount = document.querySelector("[data-total-money]");
  let totalBackers = document.querySelector("[data-total-backers]");

  continue1[0].addEventListener("click", () => {
    if (money[0].value == "") {
      errors[0].classList.toggle("none");
      modal.classList.toggle("pointer");
      setTimeout(() => {
        errors[0].classList.toggle("none");
        modal.classList.toggle("pointer");
      }, 3000);
    } else if (money[0].value.length > 1) {
      let sayi = parseInt(money[0].value);
      let existing = localStorage.getItem("money1");
      let existingBacers = localStorage.getItem("backer");
      let newData = existing ? parseInt(existing) + sayi : sayi;
      let newBackers = existingBacers ? parseInt(existingBacers) + 1 : 1;
      localStorage.setItem("money1", newData);
      localStorage.setItem("backer", newBackers);
      completed1.classList.toggle("flex");
    }
  });
  continue1[1].addEventListener("click", () => {
    if (money[1].value == "") {
      errors[1].classList.toggle("none");
      modal.classList.toggle("pointer");
      setTimeout(() => {
        errors[1].classList.toggle("none");
        modal.classList.toggle("pointer");
      }, 3000);
    } else if (money[1].value.length > 0 && money[1].value >= 25) {
      let sayi = parseInt(money[1].value);
      let existing = localStorage.getItem("money1");
      let existingNumber = localStorage.getItem("bamboo");
      let existingBacers = localStorage.getItem("backer");
      let newBamboo = existingNumber ? parseInt(existingNumber) - 1 : 100;
      let newData = existing ? parseInt(existing) + sayi : sayi;
      let newBackers = existingBacers ? parseInt(existingBacers) + 1 : 1;
      localStorage.setItem("bamboo", newBamboo);
      localStorage.setItem("money1", newData);
      localStorage.setItem("backer", newBackers);
      completed1.classList.toggle("flex");
    } else if (money[1].value.length > 0 && money[1].value.toString() < 25) {
      errors[2].classList.toggle("none");
      modal.classList.toggle("pointer");
      setTimeout(() => {
        errors[2].classList.toggle("none");
        modal.classList.toggle("pointer");
      }, 3000);
    }
  });
  continue1[2].addEventListener("click", () => {
    if (money[2].value == "") {
      errors[3].classList.toggle("none");
      modal.classList.toggle("pointer");
      setTimeout(() => {
        errors[3].classList.toggle("none");
        modal.classList.toggle("pointer");
      }, 3000);
    } else if (money[2].value.length > 0 && money[2].value.toString() >= 75) {
      let sayi = parseInt(money[2].value);
      let existing = localStorage.getItem("money1");
      let existingBacers = localStorage.getItem("backer");
      let existingBlack = localStorage.getItem("black");
      let newBlack = existingBlack ? parseInt(existingBlack) - 1 : 63;
      let newData = existing ? parseInt(existing) + sayi : sayi;
      let newBackers = existingBacers ? parseInt(existingBacers) + 1 : 1;
      localStorage.setItem("black", newBlack);
      localStorage.setItem("money1", newData);
      localStorage.setItem("backer", newBackers);
      completed1.classList.toggle("flex");
    } else if (money[2].value.length > 0 && money[1].value.toString() < 75) {
      errors[4].classList.toggle("none");
      modal.classList.toggle("pointer");
      setTimeout(() => {
        errors[4].classList.toggle("none");
        modal.classList.toggle("pointer");
      }, 3000);
    }
  });
  amount.innerText =
    localStorage.getItem("money1") === null
      ? 0
      : localStorage.getItem("money1");
  progress.style.width =
    JSON.parse(localStorage.getItem("money1")) / 1000 + "%";
  totalBackers.innerText =
    localStorage.getItem("backer") === null
      ? 0
      : localStorage.getItem("backer");
  left2.innerText =
    localStorage.getItem("bamboo") === null
      ? 101
      : localStorage.getItem("bamboo");
  left1.innerText =
    localStorage.getItem("bamboo") === null
      ? 101
      : localStorage.getItem("bamboo");
  left3.innerText =
    localStorage.getItem("black") === null ? 64 : localStorage.getItem("black");
  left4.innerText =
    localStorage.getItem("black") === null ? 64 : localStorage.getItem("black");
  if (JSON.parse(localStorage.getItem("money1")) === 100000) {
    document.querySelector(".congratz").innerText =
      "WE'VE REACHED THE MAXIMUM AMOUNT THANK YOU SO MUCH EVERYONE !!!";
  }
  if (JSON.parse(localStorage.getItem("bamboo")) === 0) {
    prizes[0].style.opacity = "0.4";
    prizes[0].style.pointerEvents = "none";
    specialButton[2].classList.add("out");
  }
  if (JSON.parse(localStorage.getItem("black")) === 0) {
    prizes[1].style.opacity = "0.4";
    prizes[1].style.pointerEvents = "none";
    specialButton[1].classList.add("out");
  }
  if (JSON.parse(localStorage.getItem("bamboo")) === 0) {
    boxes[1].style.opacity = "0.4";
    boxes[1].style.pointerEvents = "none";
    specialButton[0].classList.add("out");
  }
  if (JSON.parse(localStorage.getItem("black")) === 0) {
    boxes[2].style.opacity = "0.4";
    boxes[2].style.pointerEvents = "none";
    specialButton[3].classList.add("out");
  }
};
calc();
closeModal.addEventListener("click", () => {
  modal.classList.toggle("none");
  container.classList.toggle("flex");
});
icon.addEventListener("mouseOver", () => {
  book.src = "./images/hover-book.svg";
});
icon.addEventListener("mouseLeave", () => {
  book.src = "./images/icon-bookmark.svg";
});
gotIt.addEventListener("click", () => {
  container.classList.toggle("flex");
  modal.classList.toggle("none");
  completed1.classList.toggle("flex");
  window.location.reload();
});
