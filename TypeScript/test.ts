function showName (name: string) {
    return 'your name is ' + name;
}
let myname = 'liuyyongsheng';
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
