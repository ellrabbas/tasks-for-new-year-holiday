// A
const myArray = [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7];
const count = {};

for (const elem of myArray) {
    count[elem] = (count[elem] || 0) + 1;
}

for (const key in count) {
    console.log(`${key}: ${count[key]}`);
}

// B
const arr1 = [1, 2, 3];
const arr2 = [3, 2, 14];


if (arr1.slice().sort().toString() === arr2.slice().sort().toString()) {
    console.log(true);
} else {
    console.log(false);
}


// C

const arr = [-7, -71, 66, 11, 3, 8, 67];
const min = Math.min(...arr);
const max = Math.max(...arr);
const output = [min, max];
console.log(output);

// D
let posSum = 0;
let negSum = 0;

for (let elem of arr) {
    if (elem > 0) {
        posSum += elem;
    } else {
        negSum += elem;
    }
}

console.log(posSum, negSum);


//E
let limit = [];
for (let elem of arr) {
    if (elem >= 0) {
        limit.push(elem);
    }
}

console.log(limit);

// F

let result = 1;
let array = [2, true, 3, false, 7, true, 4, false];

for (let i = 0; i < array.length; i++) {
    let elem = array[i];

    if (typeof elem === "number") {
        let nextElem = array[i + 1];

        if (nextElem === true) {
            result *= elem;
        } else {
            result *= 1;
        }
    }
}

console.log(result);
// G

let massiv = [1, "salam", 1, true, true, false, false, false, 5, "5"];
let empty = [];
let set = {};

for (let elem of massiv) {
    if (!(elem in set)) {
        empty.push(elem);
        set[elem] = true;
    }
}

console.log(empty);


