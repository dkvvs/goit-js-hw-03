console.log('Задание 4');

const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let totalWage = 0;
  for (const value of values) {
    totalWage += value;
  }
  return totalWage;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
