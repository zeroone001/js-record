/**
 * Description: 请输入文件描述
 * Author: liuyongsheng
 * Date: 2020-02-28 09:29:10
*/
function fun1 () {
    return new Promise((resolve) => {
        axios.get('url').then((res) => {
            resolve(res.data.time);
        });
    });
}
async function fun2 () {
    let time = await fun1();
    axios.get('url2' + time).then((res) => {
        console.log(res.data);
    });
}
fun2();

// 1,5， 3，2，8
var a = Promise.resolve();
a.then(function() {
    console.log('1')
    Promise.resolve().then(function(){
        console.log('3')
    });
    setTimeout(function(){
        console.log('8');
    }, 0);
}).then(function(){
    console.log('2');
});
a.then(function(){
    console.log('5');
})


var a = Promise.resolve().then(function() {
    console.log('1')
    setTimeout(function(){
        console.log('3')
    }, 0);
    Promise.resolve().then(function(){
        console.log('4')
    });
}).then(function(){
    console.log('2');
});

a.then(function(){
    console.log('5');
})
