let num = 266219;
let numStr = String(num);
let arr = Array.from(numStr);
let i = 0;
let mult = 1;
while (i < arr.length) {
    mult = mult * arr[i];
    i++;
}
console.log(mult);

// пункты 1-2 задания

let mult3 = mult **= 3;
console.log(mult3);


// пункт з задания

let multStr = String(mult3);
console.log(multStr.substring(0, 2));


