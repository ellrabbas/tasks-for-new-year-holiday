let k = 9;
let padding = "";
for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= k; j++) {
        if (i == 1 || i == k || j == 1 || j == k) {
            padding += "*&nbsp;&nbsp;";
        } else {
            padding += "&nbsp;&nbsp;&nbsp;&nbsp;";
        }

    }
    padding += "<br>";
}


document.write(`${padding} <br><br>`);