const allCategories = window.document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((category) => {
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
 }

) 