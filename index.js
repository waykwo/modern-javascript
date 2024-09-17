import moment from 'moment';
import { sqrt } from 'mathjs'

console.log("Hello from JS")

console.log(moment().format());
console.log(sqrt(-4).toString()) // 2i

let array = [[1, 3], [8, 9], [2, 16]];
let sum = 0;
array.forEach(pair => {
  sum += pair[0] + pair[1];
});
console.log(sum);
