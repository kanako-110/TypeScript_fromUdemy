// [INTERFACE]
// オブジェクトをdescribeするのに使える
// typeと違いオブジェクト二のみ使える,クラスにinheritできる


// 定義
interface Greetable {
	// initializeがinterfaceはできないため、name:string = "Mike"はできない
	name: string;
	age: number;

	// functionの書き方 funcName(引数:type):type
	greet(phrase: string): void;
}

class Person implements Greetable { //implementsで引き継げる
 name: string;
 age = 30;

 constructor(n:string){
   this.name= n
 }
 greet(phrase: string){
   console.log(phrase + " " + this.name)
 }
}

let user1: Greetable; //上のpersonをtypeに指定
user1 = new Person("Max")

user1.greet("Hi there, I am")