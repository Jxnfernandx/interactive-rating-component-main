const mainContainer = document.querySelector(".main-container")
const thankYou = document.querySelector(".submitted-container")
const submitBtn = document.querySelector("input")
const rateBtn = document.getElementsByClassName(".btn")


const btns = document.querySelectorAll("button");
let selectedButton = null;

for (let i = 0; i < btns.length; i++) {
    const button = btns[i];
    
    button.addEventListener("click", () => {
        if (selectedButton) {
            selectedButton.style.backgroundColor = "";
            selectedButton.style.color = "";
        }
        
        selectedButton = button;
        selectedButton.style.backgroundColor = "hsl(217, 12%, 63%)";
        selectedButton.style.color = "white";
        
        const userRating = button.value;
        document.getElementById("user-rating").textContent = userRating;
    });
}

document.addEventListener("click", (event) => {
    if (!event.target.closest(".main-container")) {
        if (selectedButton) {
            selectedButton.style.backgroundColor = "";
            selectedButton.style.color = "";
            selectedButton = null;
            document.getElementById("user-rating").textContent = "0";
        }
    }
});

submitBtn.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    mainContainer.style.display = "none";
})