let first = document.querySelector("li");
console.log(first);

document.querySelector("h1").remove();
let newItem = document.createElement("li");
newItem.textContent = "TITAN RTX";
document.querySelector("ul").append(newItem);

let items = document.querySelectorAll(".primary");
console.log(items);

