const formName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

formName.addEventListener("input", () => {
    spanName.textContent = formName.value.trim() || "Anonymous";
});