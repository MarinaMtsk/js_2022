// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (str, n) => {
    const arr = [];
    for (let i = 0; i < str.length; i += n) {
        arr.push(str.slice(i, n + i))
    }
    return arr;
}
console.log(cutString('pleasure', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

const delete_characters = (str, length) => str.slice(0, length);

console.log(delete_characters('Every hunter wants to know', 5));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = 'HTML JavaScript PHP';
//
// const insert_characters = (str) => str.split(' ').join('-').toUpperCase();
//
// console.log(insert_characters(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str2 ='hello';
const up = (string) => str2[0].toUpperCase() + str2.slice(1);
console.log(up(str2));

// - Дано список імен.
//  let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
const norm1 = (str) => {
    let string = n1.split('').map(value =>
        (value >= 'A' && value <= 'Z')
        || (value >= 'a' && value <= 'z')
         ? value : ' ').join('').trim();
        if (string.includes('  ')) {
            string = string.replace('  ', ' ');
    }
    return string;
}
let norm2 = norm1(n1);
console.log(norm2);

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// const random = ()
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str3 = 'Every hunter wants to know';
const capitalize = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
console.log(capitalize(str3));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

const val = (str) => {
    let str5 = str.toLowerCase();
    if (!str.startsWith('@')
        && str.includes('@')
        && str.includes('.', str.indexOf('@') +3)) {
        console.log('Valid');
    } else {
        console.log('Not Valid');
    }
}
console.log(val('someemail@gmail.com'));
console.log(val('someeMAIL@gmail.com'));
console.log(val('someeMAIL@i.ua'));
console.log(val('some.email@gmail.com'));


// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let symb = "m";
let str7 = 'Astronomy is a study of everything beyond Atmosphere';
const count = (str, symb) =>{
    let count = 0;
    let split = str.split('');
    for (const item of split) {
        if (item === symb) {
            count++;
        }
    }
    return count;
}
console.log(count(str7, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str9 = "Astronomy is a study of everything beyond Atmosphere";
const cutstring = (str, n) => str.split(' ').splice(0, n).join(' ');

console.log(cutstring(str9, 5))

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню

// sort, filter