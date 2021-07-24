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
        // 劫持
        Object.defineProperty(data, key, {
            enumberable: true, // 可遍历，当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中
            configurable: false, // 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除
            // writable: true,  // writable和value 这两个不能跟set get 同时出现
            get () {
                console.log('get---->', value);
                return value;
            },
            set:(newValue) => {
                if (newValue !== value) {
                    // 解决直接修改对象导致没有了劫持和监听
                    this.observer(newValue);
                    value = newValue;
                }
            }
        });
    }
}