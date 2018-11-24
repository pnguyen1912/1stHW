
let created = false;
function addmore() {
    let row = document.getElementById("div1");
    let btn=document.getElementById('hidbtn');
    if (created == false) {
        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        c1.innerHTML = "Touly";
        c2.innerHTML = "10";
        created = true;
        btn.style.display ="none";
    } else {
        console.log('Already added')
    }
}
let changeBG = () => {
    let thediv = document.getElementById('div2');
    thediv.style.backgroundColor = 'blue';
}

function nouseyet() {
    let i = document.getElementById("div3");
    i.classList.add("nouse");
}

function hidsee() {
    let hidden = document.getElementById('hidden');
    let btn = document.getElementById('btn');
    if (hidden.style.display == "none") {
        hidden.style.display = "block";
        btn.innerHTML = "Hide Grade";
    } else {
        hidden.style.display = "none";
        btn.innerHTML = "Show Grade";
    }
}