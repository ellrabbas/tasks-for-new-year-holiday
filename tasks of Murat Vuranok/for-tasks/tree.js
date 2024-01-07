let t = 5;


for (let i = 1; i <= t; i++) {
    let br = "<br>";

    for (let j = t; j > i; j--) {
        br += "&nbsp;&nbsp;";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
        br += "*";
    }

    document.write(br);
}