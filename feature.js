// background-color: rgb(66, 100, 211);
// rgba(68,52,247,.33)
var a = document.getElementById("aa")
function backcolor(){
    a.style.background= "rgb(66, 100, 211)"
}

a.addEventListener("mouseover",backcolor)

var b = document.getElementById("aa")
function backcolor2(){
    b.style.background= "none"
}
b.addEventListener("mouseleave",backcolor2)
// -----------dynamic color-----------



var c = document.getElementById("bb")
function backcolor3(){
    c.style.background= "rgb(66, 100, 211)"
}

c.addEventListener("mouseover",backcolor3)

var d = document.getElementById("bb")
function backcolor4(){
    d.style.background= "none"
}

d.addEventListener("mouseleave",backcolor4)


//-----------testing-------------//

var e = document.getElementById("cc")
function backcolor5(){
    e.style.background= "rgb(66, 100, 211)"
}

e.addEventListener("mouseover",backcolor5)

var f = document.getElementById("cc")
function backcolor6(){
    f.style.background= "none"
}

f.addEventListener("mouseleave",backcolor6)

//-------------analytics-----------//
var g= document.getElementById("dd")
function backcolor7(){
    g.style.background= "rgb(66, 100, 211)"
}

g.addEventListener("mouseover",backcolor7)

var h = document.getElementById("dd")
function backcolor8(){
    h.style.background= "none"
}

h.addEventListener("mouseleave",backcolor8)

//-------------Logging-----------//
var i= document.getElementById("ee")
function backcolor9(){
    i.style.background= "rgb(66, 100, 211)"
}

i.addEventListener("mouseover",backcolor9)

var j = document.getElementById("ee")
function backcolor10(){
    j.style.background= "none"
}

j.addEventListener("mouseleave",backcolor10)

//-------------down get_box---------------//

var get= document.getElementById("get_js")
function getcolor(){
    get.style.backgroundColor= "rgb(35, 255, 126)"
}

get.addEventListener("mouseover",getcolor)

var get2 = document.getElementById("get_js")
function getcolor2(){
    get2.style.backgroundColor= "#27ae60"
}

get2.addEventListener("mouseleave",getcolor2)

//-------------top get_box---------------//

var get3= document.getElementById("get_js2")
function getcolor3(){
    get3.style.backgroundColor= "blue"
}

get3.addEventListener("mouseover",getcolor3)

var get4 = document.getElementById("get_js2")
function getcolor4(){
    get4.style.background= "none"
}

get4.addEventListener("mouseleave",getcolor4)