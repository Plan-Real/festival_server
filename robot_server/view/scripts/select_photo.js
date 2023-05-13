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
}

box1_c.addEventListener("click", e=>{
    if (selected != 1) {
        selected = 1;
        clear()
        box1.className = 'select'
        box1_sub.className = "check"
    }
})

box2_c.addEventListener("click", e=>{
    if (selected != 2) {
        selected = 2;
        clear()
        box2.className = 'select'
        box2_sub.className = "check"
    }
})

box3_c.addEventListener("click", e=>{
    if (selected != 3) {
        selected = 3;
        clear()
        box3.className = 'select'
        box3_sub.className = "check"
    }
})

box4_c.addEventListener("click", e=>{
    if (selected != 4) {
        selected = 4;
        clear()
        box4.className = 'select'
        box4_sub.className = "check"
    }
})

const click = document.querySelector(".click")

click.addEventListener("click", e=>{
    if (selected != 0) {
        fetch("http://127.0.0.1:3000/convert/"+selected, {method : "GET"})
        .then(
            location.replace("loading.html")
        )
    }
})