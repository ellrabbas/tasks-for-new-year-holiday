let n = 15;
let spacing = "";
for (let i = 1; i < n; i++) {
    for (let j = 1; i > j; j++) {
        spacing += "*&nbsp;&nbsp";
    }
    spacing += "<br>";
}

document.write(`${spacing} <br><br><br><br>`);
