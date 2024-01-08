let str = "High knowledge, high return";
let arr = str.split(" ").filter(item => item !== "").map(item => item.toLowerCase());
console.log(arr);