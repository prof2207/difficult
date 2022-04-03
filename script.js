'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', '<i>Суббота<i/>', '<i>Воскресенье<i/>'];

let now = new Date();
if ((String(now)).slice(0, 3) === "Mon") {
    week.splice(0, 1, "<b>Понедельник</b>");
} else if ((String(now)).slice(0, 3) === "Tue") {
    week.splice(1, 1, "<b>Вторник</b>");
} else if ((String(now)).slice(0, 3) === "Wed") {
    week.splice(2, 1, "<b>Среда</b>");
} else if ((String(now)).slice(0, 3) === "Thu") {
    week.splice(3, 1, "<b>Четверг</b>");
} else if ((String(now)).slice(0, 3) === "Fri") {
    week.splice(4, 1, "<b>Пятница</b>");
} else if ((String(now)).slice(0, 3) === "Sat") {
    week.splice(5, 1, "<b><i>Суббота<i/></b>");
} else if ((String(now)).slice(0, 3) === "Sun") {
    week.splice(6, 1, "<b><i>Воскресенье<i/></b>");
}
let outArr = document.getElementById('outArr');
let str = ' ';
for (let i = 0; i < week.length; i++) {
    if (week[i] !== undefined) str = str + week[i] + '<br>';
}
outArr.innerHTML = str;




console.log(String(now).slice(0, 3));





