// decorator

// まず使うfuncを定義
function Logger(longString: string) {
	return function (constructor: Function) {
		console.log(longString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log("TEMPLATE FACTORY");
	return function <T extends {new(...args: any[]): {name: string}}> (originalConstructor: T) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();
				console.log("Rendering Template");
				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector("h1")!.textContent = this.name;
				}
			}
		};
	};
}

// @funcName
@WithTemplate("<h1>My Person Object Here</h1>", "app") //appはHTMLのID
class PERSON {
	name = "Max";

	constructor() {
		console.log("Creating person obj");
	}
}

const pers = new PERSON();

console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
	console.log("Log Func Here");
	console.log(target, propertyName);
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("Log2 here");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("Log3 here");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}
function Log4(target: any, name: string | Symbol, position: number) {
	console.log("Log4 here");
	console.log(target);
	console.log(name);
	console.log(position);
}
class Product {
	@Log
	title: string;
	private _price: number;

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error("Invalid Price");
		}
	}

	constructor(t: string, p: number) {
		(this.title = t), (this._price = p);
	}
	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this._price * (1 + tax);
	}
}
