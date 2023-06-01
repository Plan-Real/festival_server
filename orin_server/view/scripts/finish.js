const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')

const box1_sub = document.getElementById('box1_sub')
const box2_sub = document.getElementById('box2_sub')
const box3_sub = document.getElementById('box3_sub')
const box4_sub = document.getElementById('box4_sub')

const box1_c = document.querySelector(".box1_c")
const box2_c = document.querySelector(".box2_c")
const box3_c = document.querySelector(".box3_c")
const box4_c = document.querySelector(".box4_c")

const f1 = document.getElementById("f1")
const f2 = document.getElementById("f2")
const f3 = document.getElementById("f3")
const f4 = document.getElementById("f4")

var selected = 0

function clear() {
    box1.className = 'no'
    box1_sub.className = "no_check"
    box2.className = 'no'
    box2_sub.className = "no_check"
    box3.className = 'no'
    box3_sub.className = "no_check"
    box4.className = 'no'
    box4_sub.className = "no_check"
    f1.className = "f1_n"
    f4.className = "f4_n"
    f3.className = "f3_n"
    f2.className = "f2_n"
}

box1_c.addEventListener("click", e=>{
    if (selected != 1) {
        selected = 1;
        clear()
        box1.className = 'select'
        box1_sub.className = "check"
        f1.className = 'f_y'
    }
})

box2_c.addEventListener("click", e=>{
    if (selected != 2) {
        selected = 2;
        clear()
        box2.className = 'select'
        box2_sub.className = "check"
        f2.className = 'f_y'
    }
})

box3_c.addEventListener("click", e=>{
    if (selected != 3) {
        selected = 3;
        clear()
        box3.className = 'select'
        box3_sub.className = "check"
        f3.className = 'f_y'
    }
})

box4_c.addEventListener("click", e=>{
    if (selected != 4) {
        selected = 4;
        clear()
        box4.className = 'select'
        box4_sub.className = "check"
        f4.className = 'f_y'
    }
})

const click = document.querySelector(".click")
const back = document.getElementById("back")
const an = document.getElementById("an")
const an_btn = document.getElementById("an_btn")
const an_click = document.getElementById("an_click")
const an_click_box = document.getElementById("an_click_box")

an_click_box.addEventListener("click", e=>{
    back.className = "off";
    an_click.className = "off"
})

click.addEventListener("click", e=>{
    if(selected == 0) {
        // back.className = "back_bg";
        // an_click.className = "an_click"
    } 
    else {
        back.className = "back_bg";
        an.className = "announce";
        an_btn.addEventListener("click", e=>{
            fetch("http://127.0.0.1:3000/print/"+selected, {method: "GET"})
            .then((response) => {
                console.log(response)
                location.replace("intro.html")
            })
        })
    }
})