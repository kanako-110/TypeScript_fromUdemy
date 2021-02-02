"use strict";
// Generic Type
// ....何が引数に入ってくるか指定しない。入ってきたものが型、と指定する。
// array, number, string...など指定せず、string,number,,,,どれが入っても対応できる！けど「入ってきたもの」と指定はしている
// const names: Array<string> = []; // Array<string> = string[]。arrayの中にstringが入ることを指定することでその後そのarrayを正しく使えているか判断してくれる。(数字にしか使えないfunctionは使えないなど)
// names[0].split("");
function merge(objA, objB) {
    //onjA: object だけ返すと、tsは中身が何か分からない。よってmergedOnj.nameなど中身を取り出そうとするとエラーが出る。そこでmerge<T,U>(-:T, -:U)で指定する。すると引数には、mergeをfuncとして呼び出したときに引数として入れたものが型になります、と指定できる！
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Kanako", hobbies: "Learning Eng" }, { age: 23 });
console.log(mergedObj.hobbies);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1";
    }
    else if (element.length > 1) {
        descriptionText = "Got" + element.length + "elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
function extractAndConvert(obj, key) {
    return "Value" + obj[key];
}
extractAndConvert({ name: "Max" }, "name");
// ---generic Class
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("MAx");
textStorage.addItem("Ito");
textStorage.removeItem("Ito");
console.log(textStorage.getItem());
function createCourseGoal(title, description, date) {
    let courseGoal = {}; //CourseGoalを型に指定、しかしPartialをつけることで指定したオブジェクトの中身はoptionalだよ～と伝えている
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//# sourceMappingURL=generic.js.map