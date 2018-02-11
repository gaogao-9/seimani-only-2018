module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true
	},
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	rules: {
	"semi": ["error", "always"],
	"indent": ["error", "tab"],
	"no-tabs": ["off"],
	"quotes": ["error", "double"],
	"comma-dangle": ["error", "always-multiline"],
	"brace-style": ["error", "stroustrup"],
	"space-before-function-paren": ["error", "never"],
	"keyword-spacing": ["error", {
		"before": true,
		"after": false,
		"overrides": {
			"import": { after: true },
			"from": { after: true },
			"return": { after: true },
		}
	}]
	},
	globals: {}
}
