
// try box box
function trychange()
{
    b.style.backgroundColor = "rgb(35, 255, 126)"
}

var b = document.getElementById("try_js")
b.addEventListener("mouseenter",trychange)

function trychange2()
{
    b.style.backgroundColor = "#2cc36b"
}

var b = document.getElementById("try_js")
b.addEventListener("mouseleave",trychange2)

// get try box
function getchange()
{
    get.style.backgroundColor = "blue"
}

var get = document.getElementById("get_js")
get.addEventListener("mouseover",getchange)

function getchange2()
{
    bb.style.backgroundColor = "rgba(68,52,247,.33)"
}

var bb= document.getElementById("get_js")
bb.addEventListener("mouseleave",getchange2)

// try online demo color change

function demochange()
{
    a.style.backgroundColor = "blue"
}

var a = document.getElementById("try")
a.addEventListener("mouseover",demochange)

function demochange2()
{
    c.style.backgroundColor = "#45a9cc"
}

var c= document.getElementById("try")
c.addEventListener("mouseleave",demochange2)

// down button change
var btn =document.querySelector(".down_btn")
function btnchange()
{
    btn.style.backgroundColor = "blue"
}


btn.addEventListener("mouseover",btnchange)

function btnchange2()
{
    btn_2.style.backgroundColor = "#45a9cc"
}

var btn_2= document.querySelector(".down_btn")
btn_2.addEventListener("mouseleave",btnchange2)


// --------------image slide------------

// rgb(202, 202, 202)


var sml_bx = document.getElementById("small")

function smallcolor(){
    sml_bx.style.backgroundColor = "grey"
    sml_bx2.style.backgroundColor = "rgb(202, 202, 202)"
    sml_bx3.style.backgroundColor = "rgb(202, 202, 202)"
}

sml_bx.addEventListener("click",smallcolor)

var sml_bx2 = document.getElementById("small2")

function smallcolor2(){
    sml_bx.style.backgroundColor = "rgb(202, 202, 202)"
    sml_bx2.style.backgroundColor = "grey"
    sml_bx3.style.backgroundColor = "rgb(202, 202, 202)"
}

sml_bx2.addEventListener("click",smallcolor2)

var sml_bx3 = document.getElementById("small3")

function smallcolor3(){
    sml_bx.style.backgroundColor = "rgb(202, 202, 202)"
    sml_bx2.style.backgroundColor = "rgb(202, 202, 202)"
    sml_bx3.style.backgroundColor = "grey"
}

sml_bx3.addEventListener("click",smallcolor3)