let a = 9;
let s = "";
for (let i = a; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
        s += "* ";
    }
    s += "<br>";
}

document.write(`<br><br>${s} <br><br>`);

