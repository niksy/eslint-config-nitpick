let a = 1;
const b = 2;
b = 3;

function foo1 () {
	var bar = {
		bad: () => {
			var a = `a b c ${d} e`;
			var aa = 'a b c' + d + 'e';
			var b = [1, 2, ...bb];
			console.log(this.foo);
		},
		catch: function () {}
	};
	bar.catch = function () {};
}

var foo2 = {};
var bar = {};

fn(_.extend(foo, bar));
var baz = _.extend(foo, bar);

console.log("foobar")

var p = new Promise(function ( r1, r2 ) {})

throw Error();

var [foo3, ... bar] = [1, 2];
