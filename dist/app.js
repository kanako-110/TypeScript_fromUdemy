"use strict";
// decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// まず使うfuncを定義
function Logger(longString) {
    return function (constructor) {
        console.log(longString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
// @funcName
let PERSON = class PERSON {
    constructor() {
        this.name = "Max";
        console.log("Creating person obj");
    }
};
PERSON = __decorate([
    WithTemplate("<h1>My Person Object Here</h1>", "app") //appはHTMLのID
], PERSON);
const pers = new PERSON();
console.log(pers);
//# sourceMappingURL=app.js.map