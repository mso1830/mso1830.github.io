document.addEventListener("DOMContentLoaded", function () {
    const cardForm = document.getElementById("cardForm");
    const nameInput = document.getElementById("name");
    const card = document.getElementById("card");
    const cardName = document.getElementById("cardName");

    cardForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        if (name) {
            cardName.textContent = name;
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});

