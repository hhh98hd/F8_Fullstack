const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3, '\n'); // [1 2 3 4 5]

const obj1 = {
    name: 'HoangHH7',
    dob: '04/16/1998'
}

const obj2 = {
    rank: 'DEV02',
    dep: 'GAM.IVI'
}

const employee = {...obj1, ...obj2};
console.log(employee, '\n'); //{ name: 'HoangHH7', dob: '04/16/1998', rank: 'DEV02', dep: 'GAM.IVI' }
