import Stack from './lib/stack';//es6模块化引入
import ObjStack from './lib/StackObj';
const stack = new Stack();
stack.push('第一条数据');
stack.push('第二条数据');
stack.pop();

const decimalToBinaryObjstack = function (decNumber: number) {
    const stack = new ObjStack();
    let rem;
    let binaryString = "";
}
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.clear());
//对象栈>数组栈


