/*********************************************
 *             chapter 1                     *
 *********************************************/

//a) Check if the given input strings contain two irrespective of case.
(function() {
	const assert = require('assert');

	let s1 = 'Their artwork is exceptional';
	let s2 = 'one plus tw0 is not three';
	let s3 = 'TRUSTWORTHY';

	const p1 = /two/i;

	assert.equal(p1.test(s1), true);
	assert.equal(p1.test(s2), false);
	assert.equal(p1.test(s3), true);
})();

/**********************************************/

// b) For the given multiline input string, filter all lines NOT containing the string 2.
(function() {
	const assert = require('assert');

	let purchases = `items qty
	apple 24
	mango 50
	guava 42
	onion 31
	water 10`

	const num = /2/;

	const expected = `items qty
	mango 50
	onion 31
	water 10`;

	assert.equal(
		purchases
		.split('\n')
		.filter(p => !num.test(p))
		.join('\n'),
		expected
	);
})();

/**********************************************/

//c) Replace all occurrences of 0xA0 with 0x50 for the given input string.
(function() {
	const assert = require('assert');

	let h1 = 'start address: 0xA0, end address: 0xA0B';
	assert.equal(h1.replace(/0xA0/g, '0x50'), 'start address: 0x50, end address: 0x50B');
})();

/*********************************************
 *             chapter 2                     *
 *********************************************/

// a) Check if the given input strings contain is or the as whole words.
(function() {
	const assert = require('assert');

	let str1 = 'is; (this)'
	let str2 = "The food isn't good"
	let str3 = 'the2 cats'
	let str4 = 'switch on the light'

	const p1 = /\bis\b/;
	const p2 = /\bthe\b/;

	assert.equal(p1.test(str1) || p2.test(str1), true);
	assert.equal(p1.test(str2) || p2.test(str2), false);
	assert.equal(p1.test(str3) || p2.test(str3), false);
	assert.equal(p1.test(str4) || p2.test(str4), true);
})();

/**********************************************/

// b) For the given input string, change only whole word red to brown
(function() {
	const assert = require('assert');

	let s1 = 'bred red spread credible red;'
	assert.equal(s1.replace(/\bred\b/g, 'brown'), 'bred brown spread credible brown;');
})();

/**********************************************/

// c) For the given input array, filter all elements that contains 42 surrounded by word characters.
(function() {
	const assert = require('assert');

	let a1 = ['hi42bye', 'nice1423', 'bad42', 'cool_42a', 'fake4b']
	assert.deepEqual(a1.filter(w => /\B42\B/g.test(w)), ["hi42bye", "nice1423", "cool_42a"])
})();

/**********************************************/

// d) For the given input list, filter all elements that start with den or end with ly
(function() {
	const assert = require('assert');
	let a2 = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly away', 'dent']
	assert.deepEqual(a2.filter(w => /^den/.test(w) || /ly$/.test(w)), ["lovely", "2 lonely", "dent"]);
})();

/**********************************************/

// e) For the given input string, change whole word mall to 1234 only if it is at the start of line.
(function() {
	const assert = require('assert');

	let para = `ball fall wall tall
	mall call ball pall
	wall mall ball fall
	mallet wallet malls`;

	let soln = `ball fall wall tall
	1234 call ball pall
	wall mall ball fall
	mallet wallet malls`

	assert.equal(para.replace(/^\t\bmall\b/m, '\t1234'), soln);
})();

/*********************************************
 *             chapter 3                     *
 *********************************************/

// a) For the given input list, filter all elements that start with den or end with ly
(function() {
	const assert = require('assert');

	let a1 = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly away', 'dent'];
	assert.deepEqual(a1.filter(w => /^den|ly$/.test(w)), ["lovely", "2 lonely", "dent"]);
})();

/**********************************************/

// b) For the given input strings, replace all occurrences of removed or reed or received or refused with X.
(function() {
	const assert = require('assert');

	let s1 = 'creed refuse removed read'
	let s2 = 'refused reed redo received'

	const p1 = /removed|reed|received|refused/g;

	assert.equal(s1.replace(p1, 'X'), "cX refuse X read");
	assert.equal(s2.replace(p1, 'X'), "X X redo X");

})();

/**********************************************/

// c) For the given input strings, replace late or later or slated with A.
(function() {
	const assert = require('assert');

	let str1 = 'plate full of slate'
	let str2 = "slated for later, don't be late"

	const p2 = /slated|later|late/g;

	assert.equal(str1.replace(p2, 'A'),"pA full of sA");
	assert.equal(str2.replace(p2, 'A'),"A for A, don't be A")
})();

/*********************************************
 *             chapter 4                     *
 *********************************************/

// a) Transform given input strings to expected output using same logic on both strings.
(function() {
	const assert = require('assert');

	let str1 = '(9-2)*5+qty/3'
	let str2 = '(qty+4)/2-(9-2)*5+pq/4'

	const p1 = /\(9\-2\)\*5/;

	assert.equal(str1.replace(p1, '35'),"35+qty/3");
	assert.equal(str2.replace(p1, '35'),"(qty+4)/2-35+pq/4");
})();

/**********************************************/

// b) Replace any matching item from given array with X for the given input strings.
(function() {
	const assert = require('assert');

	function escapeRegExp(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	function unionRegExp(arr) {
		return arr.map(w => escapeRegExp(w)).join('|');
	}
	let items = ['a.b', '3+n', 'x\\y\\z', 'qty||price', '{n}']
	const p2 = new RegExp(`${unionRegExp(items)}`, 'g');

	assert.equal('0a.bcd'.replace(p2, 'X'),"0Xcd");

	assert.equal('E{n}AMPLE'.replace(p2, 'X'),"EXAMPLE")

	assert.equal('43+n2 ax\\y\\ze'.replace(p2, 'X'),"4X2 aXe")
})();

/*********************************************
 *             chapter 5                     *
 *********************************************/

// a) Use regular expression to get the output as shown for the given strings.
(function() {
	const assert = require('assert');

	let eqn1 = 'a+42//5-c'
	let eqn2 = 'pressure*3+42/5-14256'
	let eqn3 = 'r*42-5/3+42///5-42/53+a'

	const expr = /42\/\/?5/;

	assert.deepEqual(eqn1.split(expr), ["a+", "-c"]);
	assert.deepEqual(eqn2.split(expr), ["pressure*3+", "-14256"]);
	assert.deepEqual(eqn3.split(expr), ["r*42-5/3+42///5-", "3+a"]);

})();

/**********************************************/

// b) For the given strings, construct a regexp to get output as shown.
(function() {
	const assert = require('assert');

	let str1 = 'a+b(addition)'
	let str2 = 'a/b(division) + c%d(#modulo)'
	let str3 = 'Hi there(greeting). Nice day(a(b)'

	const remove_parentheses = /\(.*?\)/g;

	assert.equal(str1.replace(remove_parentheses, ''),"a+b");
	assert.equal(str2.replace(remove_parentheses, ''),"a/b + c%d");
	assert.equal(str3.replace(remove_parentheses, ''),"Hi there. Nice day");
})();

/**********************************************/

// c) Remove leading/trailing whitespaces from all the individual fields of these csv strings.
(function() {
	const assert = require('assert');

	let csv1 = ' comma  ,separated ,values '
	let csv2 = 'good bad,nice  ice  , 42 , ,   stall   small'

	assert.equal(csv1.split(',').map(s => s.trim()), "comma,separated,values");
	assert.equal(csv2.split(',').map(s => s.trim()), "good bad,nice  ice,42,,stall   small");
})();

/**********************************************/

// d) Correct the given regexp to get the expected output.
(function() {
	const assert = require('assert');

	let str4 = 'plink incoming tint winter in caution sentient'

	const pat2 = /io?n(t(er)?|co|g|k)?/g;

	assert.equal(str4.replace(pat2, 'X'), "plX XmX tX wX X cautX sentient");
})();

/**********************************************/

// e) For the given greedy quantifiers, what would be the equivalent form using {m,n} representation?
// ? is same as {0,1}
// * is same as {0,}
// + is same as {1,}

/**********************************************/

// f) (a*|b*) is same as (a|b)* — true or false?
// No. Consider string "abbb". It matches second, not first.

/**********************************************/

// g) Delete from the string start if it is at beginning of a line up to
// the next occurrence of the string end at end of a line.
// Match these keywords irrespective of case.
(function() {
	const assert = require('assert');

	let para = `good start
	start working on that
	project you always wanted
	to, do not let it end
	hi there
	start and end the end
	42
	Start and try to
	finish the End
	bye`

	let soln = `good start

	hi there

	42

	bye`;

	const pat3 = /^\tstart.*?end$/igsm;

	assert.equal(para.replace(pat3, ''), soln);
})();

/*********************************************
 *             chapter 6                     *
 *********************************************/

// a) For the given strings, extract the matching portion from first is to last t
(function() {
	const assert = require('assert');

	let str1 = 'What is the biggest fruit you have seen?'
	let str2 = 'Your mission is to read and practice consistently'

	const p1 = /is.*t/;
	assert.equal(str1.match(p1)[0], "is the biggest fruit");
	assert.equal(str2.match(p1)[0], "ission is to read and practice consistent");
})();

/**********************************************/

// b) Transform the given input strings to expected output as shown.
(function() {
	const assert = require('assert');

	let row1 = '-2,5 4,+3 +42,-53 '
	let row2 = '1.32,-3.14 634,5.63 '

	assert.deepEqual(Array.from(
		row1.matchAll(/((\+|\-)?\d+),((\+|\-)?\d+)/g), m => parseInt(m[1]) + parseInt(m[3])),
		[3, 7, -11]
	);
	assert.deepEqual(Array.from(
		row2.matchAll(/((\+|\-)?\d+(\.\d+)?),((\+|\-)?\d+(\.\d+)?)/g), m => parseFloat(m[1]) + parseFloat(m[4])),
		[-1.82, 639.63]);

})();

/**********************************************/

// c) Write a string function that changes given input to alternate case.
// The first alphabet should be changed to lowercase,
// the next one to uppercase and then lowercase and so on.
// Characters other than alphabets should be left alone and not affect case changing.

(function() {
	const assert = require('assert');

	function aLtErNaTeCaSe(ip) {
		let parity = 1
		return ip.replace(/./g, c => {
			if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
				if (parity) {
					parity = !parity;
					return c.toLowerCase();
				} 
				parity = !parity;
				return c.toUpperCase();
			}
			return c;
		});
	}

	assert.equal(aLtErNaTeCaSe('HI THERE!'),"hI tHeRe!");
	assert.equal(aLtErNaTeCaSe('good morning'),"gOoD mOrNiNg");
	assert.equal(aLtErNaTeCaSe('Sample123string42with777numbers'),"sAmPlE123sTrInG42wItH777nUmBeRs");
})();

/**********************************************/

// d) Replace the string par with spar, spare with extra and park with garden
(function() {
	const assert = require('assert');

	let str3 = 'apartment has a park'
	let str4 = 'do you have a spare cable'
	let str5 = 'write a parser'

	let d1 = {'par': 'spar', 'spare': 'extra', 'park': 'garden'};
	const p2 = /spare|park|par/g; 

	assert.equal(str3.replace(p2, k => d1[k]),"aspartment has a garden");
	assert.equal(str4.replace(p2, k => d1[k]),"do you have a extra cable");
	assert.equal(str5.replace(p2, k => d1[k]),"write a sparser");
})();

/*********************************************
 *             chapter 7                     *
 *********************************************/

// a) Delete all pair of parentheses, unless they contain a parentheses character.
(function() {
	const assert = require('assert');

	let str1 = 'def factorial()'
	let str2 = 'a/b(division) + c%d(#modulo) - (e+(j/k-3)*4)'
	let str3 = 'Hi there(greeting). Nice day(a(b)'

	const remove_parentheses = /\([^\(\)]*\)/g;
	assert.equal(str1.replace(remove_parentheses, ''),"def factorial");
	assert.equal(str2.replace(remove_parentheses, ''),"a/b + c%d - (e+*4)");
	assert.equal(str3.replace(remove_parentheses, ''),"Hi there. Nice day(a");
})();

/**********************************************/

// b) Output true/false depending upon input string containing any number sequence that is greater than 624
(function() {
	const assert = require('assert');

	let n1 = 'hi0000432abcd'
	let n2 = '42_624 0512'
	let n3 = '3.14 96 2 foo1234baz'

	const p = /[0-9]+/g;

	assert.equal(n1.match(p).some(m => m > 624), false);
	assert.equal(n2.match(p).some(m => m > 624), false);
	assert.equal(n3.match(p).some(m => m > 624), true);
})();

/**********************************************/

// c) Split the given strings based on consecutive sequence of digit or whitespace characters.
(function() {
	const assert = require('assert');

	let s1 = 'lion \t Ink32onion Nice'
	let s2 = '**1\f2\n3star\t7 77\r**'

	const p1 = /[\s\d]+/g;

	assert.deepEqual(s1.split(p1),["lion", "Ink", "onion", "Nice"]);
	assert.deepEqual(s2.split(p1),["**", "star", "**"]);
})();

/**********************************************/

// d) Extract all hex character sequences, with optional 0x prefix. Match the characters case insensitively, and sequences surrounded by other word characters shouldn't be matched.
(function() {
	const assert = require('assert');

	const hex_seq = /\b(0x)?[0-9A-F]+\b/ig;

	assert.deepEqual('128A foo 0xfe32 34 0xbar'.match(hex_seq),["128A", "0xfe32", "34"]);
	assert.deepEqual('0XDEADBEEF lace 0x0ff1ce bad'.match(hex_seq),["0XDEADBEEF", "0x0ff1ce", "bad"]);
})();

/**********************************************/

// e) For the given string, surround all whole words with {} except for whole words par and cat.
(function() {
	const assert = require('assert');

	let w1 = 'part; cat {super} rest_42 par scatter'
	assert.equal(w1.replace(/{?\w+}?/g, m => !/\b(par|cat)\b/.test(m) ? `{${m}}` : m),"{part}; cat {{super}} {rest_42} par {scatter}");
})();


/*********************************************
 *             chapter 8                     *
 *********************************************/

// a) The given string has fields separated by : and
// each field has a floating point number followed by a , and a string.
// If the floating point number has only one digit precision,
// append 0 and swap the strings separated by , for that particular field.
(function() {
	const assert = require('assert');

	let row = '3.14,hi:42.5,bye:1056.1,cool:00.9,fool'

	assert.equal(row.replace(/(\d+\.\d),(\w+)/g, '$2,$10'),"3.14,hi:bye,42.50:cool,1056.10:fool,00.90");
})();

/**********************************************/

// b) Check if given input strings have at least
// two consecutive repeated alphabets irrespective
// of case. For example, words like stillnesS and
// Committee should return true but words like root
// or readable or rotational should return false.
// Consider word to be as defined in regular expression parlance.
(function() {
	const assert = require('assert');

	let s1 = 'readable COMMItTEe'
	let s2 = 'rotational sti1lness _foot_'
	let s3 = 'needed repeated'
	let s4 = 'offsh00t'

	const p1 = /\b\w*(\w)\1\w*(\w)\2\w*\b/i;

	assert.equal(p1.test(s1),true);
	assert.equal(p1.test(s2),false);
	assert.equal(p1.test(s3),false);
	assert.equal(p1.test(s4),true);
})();

/**********************************************/

// c) Convert the given markdown headers to corresponding
// anchor tag. Consider the input to start with one
// or more # characters followed by space and word characters.
// The name attribute is constructed by converting the
// header to lowercase and replacing spaces with hyphens.
// Can you do it without using a capture group?
(function() {
	const assert = require('assert');

	let header1 = '# Regular Expressions'
	let header2 = '## Named capture groups'

	function hyphenify(m) {
		return m.toLowerCase().split(' ').join('-');
	}

	assert.equal(header1.replace(/\b[\w\s]+$/, m => `<a name='${hyphenify(m)}'></a>${m}`),"# <a name='regular-expressions'></a>Regular Expressions");

	assert.equal(header2.replace(/\b[\w\s]+$/, m => `<a name='${hyphenify(m)}'></a>${m}`),"## <a name='named-capture-groups'></a>Named capture groups");
})();

/**********************************************/

// d) Convert the given markdown anchors to corresponding hyperlinks.
(function() {
	const assert = require('assert');

	let anchor1 = "# <a name='regular-expressions'></a>Regular Expressions";
	let anchor2 = "## <a name='subexpression-calls'></a>Subexpression calls";

	const hyperlink = /^#+ <a name='([\w\-]+)'><\/a>([\w\s]+)/;

	assert.equal(anchor1.replace(hyperlink, '[$2](#$1)'),"[Regular Expressions](#regular-expressions)");
	assert.equal(anchor2.replace(hyperlink, '[$2](#$1)'),"[Subexpression calls](#subexpression-calls)");
})();

/**********************************************/

// e) Use appropriate regular expression method to get the expected output for given string.
(function() {
	const assert = require('assert');

	let str1 = 'price_42 roast: :-ice==cat east'

	assert.deepEqual(str1.split(/\b([^\w]+)\b/), ["price_42", " ", "roast", ": :-", "ice", "==", "cat", " ", "east"]);
})();


/*********************************************
 *             chapter 9                     *
 *********************************************/

// a) Remove leading and trailing whitespaces from all
// the individual fields of these csv strings. This
// time use regular expressions instead of chaining normal string methods.
(function() {
	const assert = require('assert');

	let csv1 = ' comma  ,separated ,values '
	let csv2 = 'good bad,nice  ice  , 42 , ,   stall   small'

	const trim_whitespace = /(?<=(^|,))\s*(\b[\w\s]*\b)?\s*(?=(,|$))/g;

	assert.equal(csv1.replace(trim_whitespace, '$2'),"comma,separated,values");
	assert.equal(csv2.replace(trim_whitespace, '$2'),"good bad,nice  ice,42,,stall   small");
})();


/**********************************************/

// b) Filter all elements that satisfy all of these rules:
//
// * should have at least two alphabets
// * should have at least 3 digits
// * should have at least one special character among % or * or # or $
// * should not end with a whitespace character
(function () {
	const assert = require('assert');

	let pwds = ['hunter2', 'F2h3u%9', '*X3Yz3.14\t', 'r2_d2_42', 'A $B C1234'];
	assert.deepEqual(pwds.filter(p => /(?=.*([a-zA-Z].*?){2,})(?=.*(\d.*?){3,})(?=.*([%*#$])+?).*[^\s]$/.test(p)),["F2h3u%9", "A $B C1234"]);
})();


/**********************************************/

// c) Match strings if it contains qty followed by price
// but not if there is whitespace or the string error between them.
(function () {
	const assert = require('assert');

	let str1 = '23,qty,price,42'
	let str2 = 'qty price,oh'
	let str3 = '3.14,qty,6,errors,9,price,3'
	let str4 = '42\nqty-6,apple-56,price-234,error'
	let str5 = '4,price,3.14,qty,4'

	const neg = /qty((?!(\s|error)).)*price/;

	assert.equal(neg.test(str1),true);
	assert.equal(neg.test(str2),false);
	assert.equal(neg.test(str3),false);
	assert.equal(neg.test(str4),true);
	assert.equal(neg.test(str5),false);
})();


/**********************************************/

// d) For the given string, surround all whole words
// with {} except for whole words par and cat. Can you
// solve it with lookarounds and not having to use
// function in replacement section?
(function() {
	const assert = require('assert');

	let w1 = 'part; cat {super} rest_42 par scatter spar';
	assert.equal(w1.replace(/{?\b(?!(cat|par)\b)\w+?\b}?/g, '{$&}'),"{part}; cat {{super}} {rest_42} par {scatter} {spar}");
})();


/**********************************************/

// e) Simulate string partitioning to get an array
// of three elements — string before separator,
// portion matched by separator and string after
// separator. For the first case, split the given
// input string on first occurrence of digits.
// For the second case, split based on last occurrence of digits.
(function() {
	const assert = require('assert');

	let w2 = 'Sample123string42with777numbers'

	assert.deepEqual(w2.split(/(?<=^[^\d]+)(\d+)/g),["Sample", "123", "string42with777numbers"]);
	assert.deepEqual(w2.split(/(\d+)(?=[^\d]+$)/g),["Sample123string42with", "777", "numbers"]);
})();
