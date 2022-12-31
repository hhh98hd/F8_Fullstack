const arr = [
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']]

const result = arr.reduce((obj, prop) => (obj[prop[0]] = prop[1], obj), {});

console.log(result);
// {
//     address: "Ha Noi"
//     age:  21
//     name: "Son Dang"
// }

