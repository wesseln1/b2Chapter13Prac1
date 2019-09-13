const itemInput = document.querySelector(".itemInput")
const locationInput = document.querySelector(".locationInput")
const saveButton = document.querySelector(".saveToWishList")
const container = document.querySelector(".container")

saveButton.addEventListener("click", () => {
    container.innerHTML += `
    <div>
        <p>I can purchase ${itemInput.value} at ${locationInput.value}! </p>
    </div>
    `
})