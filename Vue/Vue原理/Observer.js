// Observer劫持并监听所有的属性
class Observer {
    constructor (data) {
        this.observer(data);
    }
    observer (data) {
        /*
            {
                person: {
                    name: 'lys',
                    age: '12'
                }
            }
        
        */
        if (data && typeof data === 'object') {
            console.log('keys---->', Object.keys(data));
            Object.keys(data).forEach((key) => {
                this.defineReactive(data, key, data[key]);
            });
        }

    }
    defineReactive (data, key, value) {
        this.observer(value);
        const that = this;
        const dep = new Dep(); // 创建dep实例
        // 劫持
        Object.defineProperty(data, key, {
            enumberable: true, // 可遍历，当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中
            configurable: false, // 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除
            // writable: true,  // writable和value 这两个不能跟set get 同时出现
            get () {
                console.log('get---->', value);
                // 订阅数据变化的时候，往dep里面添加观察者
                // 往里面添加watcher
                Dep.target && dep.addSub(Dep.target); // 这个其实是在new watcher的时候执行
                return value;
            },
            set:(newValue) => {
                console.log('set---->');
                if (newValue !== value) {
                    // 解决直接修改对象导致没有了劫持和监听
                    this.observer(newValue);
                    value = newValue;
                }
                // 告诉dep通知变化
                dep.notify();
            }
        });
    }
}
// 收集和通知观察者
window.Dep = class Dep {
    constructor () {
        this.subs = [];
    }
    // 收集观察者
    addSub (watcher) {
        this.subs.push(watcher);
    }
    // 通知观察者去更新
    notify () {
        console.log('notify--->', this.subs);
        // 取出观察者
        this.subs.forEach(w => w.update());
    }
}
// 观察者
class Watcher {
    // vm 实例， expr 字段名， cb 回调
    constructor (vm, expr, cb) {
        this.vm= vm;
        this.expr = expr;
        this.cb = cb;

        // 观察者，存一下原来的值, 用于跟新的值作比较
        this.oldVal = this.getOldValue();

    }
    getOldValue () {
        // 
        // console.log('getOldValue前');
        Dep.target = this; // get() 执行的时候需要添加watcher到Dep里面
        const oldVal = CompileUtil.getValue(this.expr, this.vm);
        // console.log('getOldValue后');
        Dep.target = null;
        return oldVal;
    }
    update () {
        const newVal = CompileUtil.getValue(this.expr, this.vm);
        // 判断新旧是否相等
        if (newVal !== this.oldVal) {
            this.cb(newVal);
        }
    }
}

class TTT {
    constructor () {

    }
}