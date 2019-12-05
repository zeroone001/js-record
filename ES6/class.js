class Store {
    constructor () {
        this.state = 1;
        const store = this;
        const {show} = this;
        // 这样写的目的是解构赋值之后防止this为空
        this.show = function (str) {
            return show.call(store, str);
        };
    }
    show (str) {
        console.log(this);
    }
}
var s = new Store();
var { show } = s;
console.log(show);
