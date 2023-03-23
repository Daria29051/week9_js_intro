// Задача 1 (про уборщика и педагога)

let wagesClean = 40000;
let wagesTeach  = 22000;
let totalWages = wagesClean + wagesTeach;
console.log(totalWages);
console.log(`Вечерний уборщик, имея педагогическое образование и голос, может зарабатывать ${totalWages} руб.`);


// Задача 2 (сложить слово Владивосток и 2000)
console.log('Владивосток ' +  2000);


// Задача 3 (про Русалку)
const msg = 128;
const insta = 254;
const read = 137;
const watch = 201;
const minPerHour = 60;
const procrastTotalMin = msg + insta + read + watch;
const procrastTotalHours = procrastTotalMin / minPerHour ;
console.log(procrastTotalHours);
console.log(`Русалка прокрастинировала ${procrastTotalHours} часов.`)


// Задача 4 (возведение числа 2 в степень 5)
console.log(2**5);


// Задача 5 (вывести в консоль строку)
console.log('Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!');


// Задача 6 (склеить значения 2х переменных и вывести "Привет, Кот")
const greetings = "Привет";
const name = "Кот";
console.log(`${greetings}, ${name}.`);


// Задача 7 (про туриста из Пскова)
let time = 34;
console.log('Старт поездки. Осталось минут: ' + time);
time -= 15;
console.log('Немного сторис в соцсетях. Осталось минут: ' + time);
time -= 10;
console.log('Немного не новостей, но событий. Осталось минут: ' + time);
time = 0;
console.log('Вы приехали. Добро пожаловать в Москву.');


// Задача 8 (фаренгейт цельсии)
const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} градуса по Фаренгейту - это ${celsius} градуса по Цельсию.`);

