const fruits = [10,    20,   30];
var [num1, num2, num3] = fruits;
console.log(num1, num2, num3, '\n');

const emplpoyee = {
    name: 'HoangHH7',
    year: 1998,
    rank: 'DEV2'
}

var {name, year, rank} = emplpoyee;
console.log(name, year, rank, '\n');

var [num1,, num3] = fruits
console.log(num1, num3, '\n'); // 10 30

const arr = [1, 2, 3, 4, 5]
var [num1, num2, ...remaining] = arr;
console.log(num1, num2, remaining, '\n'); // 1 2 [3, 4, 5]

var {name, ...otherFields} = emplpoyee;
console.log(name, otherFields, '\n'); // HoangHH7 { year: 1998, rank: 'DEV2' }

var {name: emplpoyeeName} = emplpoyee;
console.log(emplpoyeeName, '\n') // HoangHH7
