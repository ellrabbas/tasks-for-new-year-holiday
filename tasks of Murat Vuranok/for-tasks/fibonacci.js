let num = parseInt(prompt("Enter any number"));

let x = 0;
let y = 1;


for (let i = 0; i < num; i++) {
    let z = x + y;
    x = y;
    y = z;
    console.log(x);
}
