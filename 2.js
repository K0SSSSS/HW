// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними
// числу 3.

const values = [6, 15, 8, 20, 3, 11, 18, 4]

const equalValues = values.filter(value => value %3 ===0)
console.log(equalValues); 

const sumEqualValues = equalValues.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);

  console.log(sumEqualValues);
