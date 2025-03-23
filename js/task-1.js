const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`)

categories.forEach(category => {
    const title = category.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    const els = category.querySelectorAll("li");
    console.log(`Elements: ${els.length}`);
})



