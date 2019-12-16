module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
        'eslint:recommended',
        'plugin:vue/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
    },
    'parser': 'vue-eslint-parser',
	'parserOptions': {
		'parser': 'babel-eslint',
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
        'import',
        'html',
        'vue'
	],
	'rules': {
		'vue/singleline-html-element-content-newline': 'off',
        'no-unused-vars': 0,
        'generator-star-spacing': 0,
		'no-dupe-keys': 0,
		'indent': ['warn', 4],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
        ],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': 'off',
        'vue/order-in-components': 'off',
        'vue/html-end-tags': 'off',
        'vue/html-self-closing': 'off',
        'vue/html-closing-bracket-newline': 0
	}
};
