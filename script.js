const mainContainer = document.querySelector(".main-container")
const thankYou = document.querySelector(".submitted-container")
const submitBtn = document.querySelector("input")
const rateBtn = document.getElementsByClassName(".btn")


submitBtn.addEventListener("click", () => {
        thankYou.classList.remove("hidden");
        mainContainer.style.display = "none";
    })

    


