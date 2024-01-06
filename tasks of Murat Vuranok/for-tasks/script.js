let stars = 9;
let spacing = "";
for (let i = 1; i <= stars; i++) {
    for (let j = 1; j <= stars; j++) {
        if (i == 1 || i == stars) {
            spacing += "*&nbsp;&nbsp;";
        } else if (j == 1 || j == stars) {
            spacing += "*&nbsp;&nbsp;";
        } else {
            spacing += "&nbsp;&nbsp;&nbsp;&nbsp;";
        }

    }
    spacing += "<br>";
}


document.write(spacing);





let n = 25;


for (let i = 1; i <= n; i++) {
    let br = "<br>";

    for (let j = n; j > i; j--) {
        br += "&nbsp;&nbsp;";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
        br += "*";
    }

    document.write(br);
}


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(`<br> ${i} x ${j} = ${i * j} <br>`);
    }

    document.write("**********************");
}






