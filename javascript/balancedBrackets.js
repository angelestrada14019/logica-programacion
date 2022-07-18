function balancedBrackets(params) {
    let n = -1;
	while (s.length != n) {
		n = s.length;
		s = s.replace('()', '');
		s = s.replace('[]', '');
		s = s.replace('{}', '');
	}
	return s.length;
}
let s = '{[()]}';
console.log(balancedBrackets(s));