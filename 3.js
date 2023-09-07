// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то
// повернути масив, в якому кожен елемент масиву буде додатнім числом.

const values = [3, -2, 5, 6, -8, 2];

const isArrayNegative = values.some(value => value < 0)

console.log(isArrayNegative);

const positiveArray = values.map(function(element){
    return Math.abs(element)
})

console.log(positiveArray);


