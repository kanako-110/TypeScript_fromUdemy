// decorator

// まず使うfuncを定義
function Logger(longString: string) {
	return function (constructor: Function) {
		console.log(longString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	return function (_: Function) {
		const hookEl = document.getElementById(hookId);
		if (hookEl) {
			hookEl.innerHTML = template;
		}
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
