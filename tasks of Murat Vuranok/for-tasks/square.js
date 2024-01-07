let m = 15;
let pad = "";
for (let i = 1; i < m; i++) {
    for (let j = 1; j < m; j++) {
        pad += "*&nbsp;&nbsp";
    }
    pad += "<br>";
}

document.write(`${pad} <br><br><br><br>`);
