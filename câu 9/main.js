let  m = [1,2,3,4,5,6,"hh" ,"9",80,100];
let mSquared = m.filter(item => typeof item === 'number').map(item => Math.pow(item, 2));
console.log(mSquared);
