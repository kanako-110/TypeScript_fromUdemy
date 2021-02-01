"use strict";
// [INTERFACE]
// オブジェクトをdescribeするのに使える
// typeと違いオブジェクト二のみ使える,クラスにinheritできる
// abstractはoverrideできる、各自のものもかける
// implementsしたら、implementsしたclassをinterfaceの名前で表示できる
let ADD;
ADD = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("hi1");
        }
    }
}
let user1; //上のpersonをtypeに指定
user1 = new Person("");
user1.greet("Hi there, I am");
//# sourceMappingURL=interface.js.map