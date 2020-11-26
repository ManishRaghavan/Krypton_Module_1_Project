var btn1 = document.getElementById("btn1")
var p = document.getElementById("ptext")
var btn2 = document.getElementById("btn2")
var p2 = document.getElementById("ptext2")



var dol_1 = document.querySelector(".d1")
var dol_2 = document.querySelector(".d2")
var dol_3 = document.querySelector(".d3")
var dol_4 = document.querySelector(".d4")
var dol_5 = document.querySelector(".d5")
function boxcolor(){
    btn1.style.backgroundColor = "#f5f7f9"
    p.style.color = "#333"
    btn2.style.backgroundColor = " #45bdcc"
    p2.style.color = "white"
    dol_1.textContent ="$ 33"
    dol_2.textContent ="$ 67"
    dol_3.textContent ="$ 127"
    dol_4.textContent ="$ 254"
    dol_5.textContent ="$ 424"
}
btn2.addEventListener("click",boxcolor)

// #45bdcc



function boxcolor2(){
    btn2.style.backgroundColor = "#f5f7f9"
    p2.style.color = "#333"
    btn1.style.backgroundColor = " #45bdcc"
    p.style.color = "white"
    dol_1.textContent ="$ 39"
    dol_2.textContent ="$ 79"
    dol_3.textContent ="$ 149"
    dol_4.textContent ="$ 299"
    dol_5.textContent ="$ 499"
}

btn1.addEventListener("click",boxcolor2)