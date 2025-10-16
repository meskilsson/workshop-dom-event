// driver: David
// navigator(s): Mattias, Malsha


// adding buttons
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(btn4);

btn1.textContent = "background";
btn2.textContent = "weather";
btn3.textContent = "delete last";
btn4.textContent = "our names";

btn1.addEventListener("click", () => {
    btn1.style.background = "#e0f2fe";
});


let p = document.createElement("p");
document.body.appendChild(p);

btn2.addEventListener("click", () => {
    p.textContent += " 4h of sleep";
});


btn3.addEventListener("click", () => {
    let last = p.lastElementChild();
    if (!last) last.remove();
});


btn4.onclick = function() {
    p.textContent = "DavidMalshaMattias";
};