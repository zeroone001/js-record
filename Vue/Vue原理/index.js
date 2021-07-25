
// 根据指令，编译数据
// expr 其实就是data里面的key
const CompileUtil = {
    // 解决persion.name 的问题

    // 注意，每次执行一遍getValue的时候， Observer 里面的get() 就会执行一遍
    getValue(expr, vm) {
        // reduce 如果传了第二个参数的话，data就是第二个参数
        return expr.split('.').reduce((data, currentData) => {
            // console.log('data', data, currentData);
            return data[currentData];
        }, vm.$data);
    },
    // 修改data的值
    setValue (expr, vm, value) {
        const arr = expr.split('.');
        console.log('value', value);
        arr.reduce((data, currentData) => {
            // console.log('data', data, currentData);
            if (currentData === arr[arr.length - 1]) {
                console.log('---->', currentData);
                data[currentData] = value;
            }
            return data[currentData];
        }, vm.$data);
    },
    getContentText (expr, vm) {
        return expr.replace(/\{\{(.+?)\}\}/g, (...args)=> {
            return this.getValue(args[1].replace(/\s+/g, ''), vm);
        });
    },

    text(node, expr, vm) {
        let value;
        // expr 可能带大括号 {{}}
        // 注意，大括号，这边的替换要使用replace
        if (expr.indexOf('{{') !== -1) {
            value = expr.replace(/\{\{(.+?)\}\}/g, (...args)=> {
                // console.log('args---->', args);
                // 妙
                new Watcher(vm, args[1].replace(/\s+/g, ''), (newVal) => {
                    // 这里太巧妙了
                    this.update.textUpdater(node, this.getContentText(expr, vm));
                });
                return this.getValue(args[1].replace(/\s+/g, ''), vm);
            });
            // console.log('new_expr', new_expr);
            // value = this.getValue(new_expr, vm);
        } else {
            // 指令属性
            new Watcher(vm, expr, (newVal) => {
                // 这里太巧妙了
                this.update.textUpdater(node, newVal);
            });
            value = this.getValue(expr, vm);
        }

        // const value = this.getValue(expr, vm);

        this.update.textUpdater(node, value);
    },
    html(node, expr, vm) {
        const value = this.getValue(expr, vm);
        // 订阅数据变化，绑定更新函数
        console.log('更新DOM结构------>');
        new Watcher(vm, expr, (newVal) => {
            // 这里太巧妙了
            this.update.htmlUpdater(node, newVal);
        });
        // 这里既要监听，又要更新
        this.update.htmlUpdater(node, value);
    },
    // 双向数据绑定
    model(node, expr, vm) {
        const value = this.getValue(expr, vm);
        // 数据驱动视图
        new Watcher(vm, expr, (newVal) => {
            // 这里太巧妙了
            this.update.modelUpdater(node, newVal, vm);
        });
        // 视图 -> 数据
        node.addEventListener('input', (e) => {
            this.setValue(expr, vm, e.target.value);
        }, false);

        this.update.modelUpdater(node, value, vm);
    },
    bind (node, expr, vm, attrName) {
        const value = this.getValue(expr, vm);
        node.setAttribute(attrName, value);
    },
    on(node, expr, vm, eventName) {
        let fn = vm.$methods && vm.$methods[expr];
        node.addEventListener(eventName, fn.bind(vm), false);
    },
    // update
    update: {
        modelUpdater(node, value, vm) {
            node.value = value;
            node.addEventListener('change', () => {
                // vm.$data
            });
        },
        htmlUpdater(node, value) {
            node.innerHTML = value;
        },
        textUpdater(node, value) {
            node.textContent = value;
        }
    }


};

class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        // 获取文档碎片对象,减少页面的性能消耗
        const fragment = this.node2Fragment(this.el);
        // console.log(fragment);

        // 编译模板
        this.compile(fragment);

        // 追加子元素到根元素
        this.el.appendChild(fragment);
    }

    compile(fragment) {
        const childNodes = fragment.childNodes;
        // console.log('childNodes', childNodes);
        Array.prototype.slice.call(childNodes).forEach((child) => {
            if (this.isElementNode(child)) {
                // 元素节点
                // console.log('child:', child);
                this.compileElement(child);

            } else {
                // 文本节点
                // console.log('text:', child);
                this.compileText(child);
            }
            // 递归处理
            if (child.childNodes && child.childNodes.length) {
                this.compile(child);
            }
        });
    }
    // 编译元素节点
    compileElement(node) {
        // 获取元素的属性
        const attrs = node.attributes;
        // console.log('attrs', attrs);
        [...attrs].forEach((item) => {
            // PS： 这里item是个对象
            // console.log('item', item, item.name, item.value);
            const { name, value } = item;

            if (this.isDirective(name)) {
                // 属性是指令 v-text="" v-html="", v-on:click v-bind:src=""
                const [, directive] = name.split('-'); // v-html
                const [directName, eventName] = directive.split(':'); // on:click
                // 根据指令，把数据编译到DOM结构上 重要
                // 数据驱动视图
                CompileUtil[directName](node, value, this.vm, eventName);

                // 删除指令标签属性
                node.removeAttribute('v-'+ directive);

            } else if (this.isAtEvent(name)) {
                // @click="abc" 这种类型
                const [,eventName] = name.split('@');
                CompileUtil['on'](node, value, this.vm, eventName);

                node.removeAttribute('@'+eventName);
            } else if (this.isColon(name)) {
                // :src="" 处理冒号的类型
                const [,attrName] = name.split(':');
                CompileUtil['bind'](node, value, this.vm, attrName);

                node.removeAttribute(':'+attrName);
            }
            // if (item.indexOf('v-html')) {
            //     console.log('v-html----->', item['v-html']);
            // }
        });
    }

    // 处理冒号的类型
    isColon (attrName) {
        return attrName.startsWith(':');
    }
    // 是否是@类型
    isAtEvent(attrName) {
        return attrName.startsWith('@');
    }

    // 是否是指令
    isDirective(attrName) {
        return attrName.startsWith('v-');
    }

    // 编译文本节点
    compileText(node) {
        // {{}}
        const textContent = node.textContent;
        // 正则匹配带大括号的文本
        if (/\{\{(.+?)\}\}/.test(textContent)) {
            // console.log('textContent---->', textContent);
            // 把数据渲染到DOM里面
            CompileUtil['text'](node, textContent, this.vm);
        }
        
    }

    node2Fragment(el) {
        const f = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            // console.log('----->', firstChild);
            // 原理：每次appendChild之后会删除原来的firstChild，导致新的firstChild就变了，就可以继续循环了
            f.appendChild(firstChild);
        }
        return f;
    }

    isElementNode(node) {
        return node.nodeType === 1;
    }
}
// 初始化 class 类
class MyVue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$methods = options.methods;
        if (this.$el) {
            // Observer 实现数据观察者
            new Observer(this.$data);
            // 实现指令解析器
            new Compile(this.$el, this);

            // 给data做一个代理
            this.proxyData(this.$data);
        }
    }
    proxyData (data) {
        for (const key in data) {
            Object.defineProperty(this, key, {
                get () {
                    return data[key];
                },
                set (newVal) {
                    data[key] = newVal;
                }
            })
        }
    }
}

