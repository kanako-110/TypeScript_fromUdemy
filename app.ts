// Generic Type

// const names: Array<string> = []; // Array<string> = string[]。arrayの中にstringが入ることを指定することでその後そのarrayを正しく使えているか判断してくれる。(数字にしか使えないfunctionは使えないなど)
// names[0].split("");

function merge<T extends object, U extends object>(objA: T, objB: U) { //onjA: object だけ返すと、tsは中身が何か分からない。よってmergedOnj.nameなど中身を取り出そうとするとエラーが出る。そこでmerge<T,U>(-:T, -:U)で指定する。すると引数には、mergeをfuncとして呼び出したときに引数として入れたものが型になります、と指定できる！
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Kanako", hobbies: "Learning Eng" }, { age: 23 });
console.log(mergedObj.hobbies)

