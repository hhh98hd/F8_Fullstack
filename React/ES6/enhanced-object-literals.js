const arr = [
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']]

const result = arr.reduce(function(obj, prop) {
    obj[prop[0]] = prop[1];
    return obj;
}, {});

console.log(result);
// {
//     address: "Ha Noi"
//     age:  21
//     name: "Son Dang"
// }

