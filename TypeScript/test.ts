function showName (name: string): string {
    return 'your name is ' + name;
}
let myname: string = 'liuyyongsheng';
console.log(showName(myname));

interface Person {
    name: string;
    age?: number
}
let my: Person = {
    name: 'liuyongsheng',
    age: 67
}
console.log(my);

// 参数默认值
function sum (x: number, y:number = 123): number {
    return x + y;
}
sum(123);

type Str = string;

function getName (name: Str): string {
    return name + 'weqwe';
}

getName('aaaa');
