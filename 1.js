// У вас є масив, який містить числа. Необхідно знайти всі числа, які є парними і більшими
// за 10, і повернути їх у зворотньому порядку

const values = [5, 14, 8, 20, 3, 11, 17, 4]

const pairValues = values.filter(value => value %2 ===0)
console.log(pairValues);

const bigValues = pairValues.filter(pairValues => pairValues >= 10)
console.log(bigValues);

const reverseArray = bigValues.reverse()
console.log(reverseArray);