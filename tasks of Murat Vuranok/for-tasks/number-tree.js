let d = 4;

for (let i = 1, count = 1; i <= d; i++) {
    let br = "<br>";

    for (let j = d; j > i; j--) {
        br += "&nbsp;&nbsp;";
    }

    for (let k = 1; k <= i; k++) {
        br += count++ + "&nbsp;";
    }

    document.write(br);
}