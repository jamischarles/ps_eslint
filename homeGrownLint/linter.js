// A linter needs to:
// 1) Read the code
// 2) Analyze it
// 3) Report on failures
//
//
var fs = require('fs');

var fileName = process.argv[2];

var code = fs.readFileSync(fileName, 'utf-8');

console.log('code', code);

function lint(code) {
	if (code.includes('console.log')) {
		console.log('lint() FAILED');
	} else {
		console.log('lint() PASSED');
	}
}

function lintRegex(code) {
	if (/^console.log/g.test(code)) {
		console.log('lintRegex() FAILED');
	} else {
		console.log('lintRegex() PASSED');
	}
}

lint(code);
lintRegex(code);
