// Navigator(s): David, Malsha
// Driver: Mattias E

// 1.

let h2 = document.createElement('h2');
let p = document.createElement('p');
let div = document.createElement('div');

h2.textContent = "Min rubrik för dagen";
h2.style.color = "#1e3a8a";
p.textContent = "Bra väder!";
p.style.color = "#fef3c7";
div.textContent = "Det här är en färgad ruta";
div.style.color = "#10b981";

document.body.appendChild(h2);
document.body.append(p);
document.body.append(div);

p.textContent += " 8pm";








