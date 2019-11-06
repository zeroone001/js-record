async function async1() {
    console.log(1)
    const result = await async2();
    console.log(3)
}

async function async2() {
    console.log(2);
}

Promise.resolve().then(() => {
    console.log(4)
})

setTimeout(() => {
    console.log(5)
}, 0)

async1();
console.log(6);

// async 函数会返回一个Promise对象， 可以使用then方法添加回调函数
async function async2() {
    console.log(2);
    return {
        then:(res)=>{
            console.log(7);
            res();
        }
    }
}
