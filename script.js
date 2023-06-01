const mainContainer = document.querySelector(".main-container")
const thankYou = document.querySelector(".submitted-container")
const submitBtn = document.querySelector("input")
const rateBtn = document.querySelector(".btn")


submitBtn.addEventListener("click", () => {
        thankYou.classList.remove("hidden");
        mainContainer.style.display = "none";
    })



