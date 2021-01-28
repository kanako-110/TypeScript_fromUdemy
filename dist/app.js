"use strict";
// [INTERFACE]
// オブジェクトをdescribeするのに使える
// typeと違いオブジェクト二のみ使える,クラスにinheritできる
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1; //上のpersonをtypeに指定
user1 = new Person("Max");
user1.greet("Hi there, I am");
//# sourceMappingURL=app.js.map