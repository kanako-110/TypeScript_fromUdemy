"use strict";
// Generic Type
// const names: Array<string> = []; // Array<string> = string[]。arrayの中にstringが入ることを指定することでその後そのarrayを正しく使えているか判断してくれる。(数字にしか使えないfunctionは使えないなど)
// names[0].split("");
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Kanako", hobbies: "Learning Eng" }, { age: 23 });
console.log(mergedObj.hobbies);
//# sourceMappingURL=app.js.map