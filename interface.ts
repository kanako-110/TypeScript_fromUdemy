// [INTERFACE]
// オブジェクトをdescribeするのに使える
// typeと違いオブジェクト二のみ使える,クラスにinheritできる
// abstractはoverrideできる、各自のものもかける
// implementsしたら、implementsしたclassをinterfaceの名前で表示できる

// interfaceを使ってFunctionのみつくるとき↓
interface AddFnc {
	(a: number, b: number): number;
}
let ADD: AddFnc;
ADD = (n1: number, n2: number) => {
	return n1 + n2;
};

// ---
interface Named {
	readonly name?: string;
	outputName?: string; //?をつけることでimplementsしたclassで使わないかも、と教えている
}
// 定義
interface Greetable extends Named {
	//extendsによってNamedの内容がここに入る
	// initializeがinterfaceはできないため、name:string = "Mike"はできない
	age: number;

	// functionの書き方 funcName(引数:type):type
	greet(phrase: string): void;
}

class Person implements Greetable, Named {
	//implementsで引き継げる
	name?: string;
	age = 30;

	constructor(n: string) {
		if (n) {
			this.name = n;
		}
	}
	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + " " + this.name);
		} else {
			console.log("hi1");
		}
	}
}

let user1: Greetable; //上のpersonをtypeに指定
user1 = new Person("");

user1.greet("Hi there, I am");
