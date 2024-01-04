
const p=(s)=>console.log(s);
const pLine=(s='')=>p(`--------------------${s}`);


// {
// 	// var globalvar;
// 	const fruit = 2;
// 	let Fruit = 3;
// 	{
// 		const fruit = 'f';
// 		let Fruit = 'F';
// 	}
// 	p(fruit);
// 	p(Fruit);

// }






// {
// 	const _aaa=4;
// 	const $aaa=5;
// 	const bbb$=8;

// 	p(_aaa)
// 	p($aaa)
// 	p(bbb$)
// }



// {
// 	const obj={
// 		name:'name1',
// 		age:22,
// 		go(){p('gogogo')}
// 	}
// 	const {w} = obj;
// 	const {age} = obj;
// 	const {go} = obj;

// 	{
// 		gg=9;
// 		//p(window.gg)
// 		//p(globalThis.gg)
// 	}

// 	go()
// 	p(w)
// 	p(age)
// 	p(go)
// 	go()
// }



// what is symbol

// {
// 	const i=parseInt('213af')
// 	const f=parseFloat('32.213df')

// 	p(i)
// 	p(f)

// 	const x = parseInt('11',2)
// 	const y = parseInt('FF',16)
// 	p(x)
// 	p(y)

// 	const a='1.1'
// 	p(a+a)
// 	p(a+2)
// 	p(2+a)
// 	p(+a+2)
// 	p((+a)+(+a))

// }

// {
// 	const st = ['a','b',,'c'];

// 	p(st)
// 	p(st.length)
// 	p(st[0])

// 	pLine()
// 	p(0xFF)
// 	p(0o12)
// 	p(0b1010)
	
// 	pLine()
// 	p(.123e+2)
// 	p(-12.3e-2)
// }



// {
// 	const b = {
// 		"":"haha",
// 		"!":"lala",
// 		"@":"hoho",
// 		a:{x:1,y:2},
// 		f1:(s)=>p(s),
// 		f2(){return 9}
// 	}

// 	p(b.f2())
// 	b.f1("aa")
// 	p(b['@'])
// 	p(b[''])
// 	p(b['!'])
// 	p(b.a)
// 	p(b.a.y)

// 	pLine()
// 	const b2=b;
// 	delete b2;
// 	const c={
// 		toString(){
// 			return "d"+super.toString();
// 		},
// 		// Computed (dynamic) property names
// 		["prop_" + (() => 42)()]: 42,

// 	}

// 	p(c)

// }

{

	const s=`
		line1
		line2
		line3
		line4
	`
	p(s)
	p`s`

	// Construct an HTTP request prefix is used to interpret the replacements and construction
	// POST`http://foo.org/bar?a=${a}&b=${b}
	// 	Content-Type: application/json
	// 	X-Credentials: ${credentials}
	// 	{ "foo": ${foo},
	// 	"bar": ${bar}}`(myOnReadyStateChangeHandler);
	
	//		oct 		hex 	unicode		代码点 (code point)
	p('__ 	\251___ 	\xA9___	\u00A9___ 	\u{2F804}__\uD87E\uDC04')

	const s2="aaa \
	bbb \
	ccc \
	ddd \n\
	zzz"
	p(s2)
}








