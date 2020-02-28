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