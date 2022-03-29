'use strict';

// Вариант A

let lang = prompt("выберите язык 'ru' или 'en'", "ru");
let ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let en = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
if (lang == "ru") {
    alert(ru);
} else if (lang == "en") {
    alert(en);
} else {
    alert("Попробуйте ещё раз");
}





// Вариант B

// let lang = prompt("выберите язык 'ru' или 'en'", "ru");
// let ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let en = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// switch (lang) {
//     case "ru":
//         alert(ru);
//         break;
//     case "en":
//         alert(en);
//         break;
//     default:
//         alert("Попробуйте ещё раз");
// }






// Вариант С

// let lang2 = [
//     ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
//     ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// ];
// let lang = prompt("выберите язык 'ru' или 'en'", "ru");
// let day = (lang == "ru") ? [lang2[0]] :
//     (lang == "en") ? [lang2[1]] :
//         "Попробуйте ещё раз";
// alert(day);






// Вариант D

// let lang = prompt("выберите язык 'ru' или 'en'", "ru");
// let day = (lang == "ru") ? ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"] :
//     (lang == "en") ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] :
//         "Попробуйте ещё раз";
// alert(day);


let user = prompt("Имя пользователя", "Введите имя");
let namePerson = (user === "Артем") ? 'директор' :
    (user === "Александр") ? 'преподаватель' :
        'студент';
console.log(namePerson);



