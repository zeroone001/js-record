module.exports = {
    root: true, // eslint 认为这就是根目录，不会再向上查找
    env: {
        browser: true,
        es6: true,
        jquery: true,
        commonjs: true
    },
    parser: 'vue-eslint-parser',
    // 解析器配置参数
    parserOptions: {
        ecmaVersion: 2018,
        parser: 'babel-eslint', // 也可以 @typescript-eslint/parser
        sourceType: 'module' // 代码类型
    },
    extends: [
        'plugin:vue/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'standard', // eslint-config-standard
        'html'
    ],
    plugins: [
        'vue',
        '@typescript-eslint',
        'import', // eslint-plugin-import 该插件想要支持对ES2015+ (ES6+) import/export语法的校验, 并防止一些文件路径拼错或者是导入名称错误的情况
        'promise' // promise规范写法检查插件，附带了一些校验规则
    ],
    globals: {
        '$': 'writeable', // true表示该变量为 writeable，而 false 表示 readonly, true,false 是历史原因
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': 0,
        'vue/html-closing-bracket-newline': 0
    }
}
