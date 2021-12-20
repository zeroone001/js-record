async function async1() {
console.log(1);
const result = await async2();
console.log(3);
}

async function async2() {
console.log(2);
}

Promise.resolve().then(() => {
console.log(4);
});

setTimeout(() => {
console.log(5);
});

async1();
console.log(6);

//1,2,6,4,3,5
/*
    async1函数本身会返回一个Promise，
    同时await后面紧跟着async2函数返回的Promise，
    console.log(3)其实是在async2函数返回的Promise的then语句中执行的，
    then语句本身也会返回一个Promise然后追加到微任务队列中，
    所以在微任务队列中console.log(3)在console.log(4)后面

*/
