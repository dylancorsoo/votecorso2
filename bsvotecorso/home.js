function cooler() {
        document.getElementById('subtitle').style.color = "black"
}

function num1() {
    Math.floor(Math.random() * 256);
}

function num2() {
    Math.floor(Math.random() * 256);
}

function num3() {
    Math.floor(Math.random() * 256);
}

function cooler2() {
    document.getElementById('subtitle2').style.color = "rgb(num1 + num2 + num3)"
}