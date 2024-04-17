const size = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

size.addEventListener("input", () => {
    let changingSize = Number(size.value);
    spanText.style.fontSize = changingSize +"px";
})