module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    env: {
        browser: true
    },
    extends: ['standard'],
    plugins: ['import', 'html', 'vue'],
    rules: {
        'arrow-parens': 0,
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1
        }],
        'no-new': 0
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
};
