
const btnColor = document.getElementById("btnColor");
const btnAdd = document.getElementById('btnAdd');
const ptag = document.querySelector('p');
const btnClear = document.getElementById('btnClear');


btnColor.onclick = function () {
    btnColor.style.backgroundColor = "black";
}



btnAdd.onclick = function () {
    ptag.textContent += "blablabllabla";
}


// btnClear.onclick = function () {
//     ptag.textContent = "";
// }

const clear = function () {
    btnClear.addEventListener('click', () => {
        ptag.textContent = "";
    });
}

clear();
