'use strict';

let arr = ["87", "43", "543", "434", "654", "43", "23"];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == "2" || arr[i][0] == "4") {
        console.log(arr[i]);
    }
}


let n = 100;
simpleNamber:
for (let u = 2; u <= n; u++) {
    for (let j = 2; j < u; j++) {
        if (u % j == 0) continue simpleNamber;
    }

    console.log(u);
}






