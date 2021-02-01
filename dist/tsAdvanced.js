"use strict";
const e1 = {
    name: "Max",
    privileges: ["privilege1"],
    startDate: new Date(),
};
function Add1(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result1 = Add1("Max", "Ito");
result1.split("");
const userDate = undefined;
const storeDate = userDate !== null && userDate !== void 0 ? userDate : "Default"; //userDateの内容がtrue(null or undefined 以外, then return the left, otherwise the right)
console.log(storeDate);
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
// 	console.log("Name: " + emp.name);
// 	if ("privileges" in emp) {
// 		console.log("Privileges: " + emp.privileges);
// 	}
// 	if ("startDate" in emp) {
// 		console.log("startDate:" + emp.startDate);
// 	}
// }
// printEmployeeInformation({ name: "Kanako", startDate: new Date() });
// class Car {
// 	drive() {
// 		console.log("Driving...");
// 	}
// }
// class Truck {
// 	drive() {
// 		console.log("Driving truck...");
// 	}
// 	loadCargo(amount: number) {
// 		console.log("Loading cargo..." + amount);
// 	}
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
// 	if ("loadCargo" in vehicle) {
// 		vehicle.loadCargo(1000);
// 	}
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
// 	type: "bird";
// 	flyingSpeed: number;
// }
// interface Horse {
// 	type: "horse";
// 	runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
// 	let speed;
// 	switch (animal.type) {
// 		case "bird":
// 			speed = animal.flyingSpeed;
// 			break;
// 		case "horse":
// 			speed = animal.runningSpeed;
// 	}
// 	console.log("speed is:" + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 100 });
// // typeはHTMLのものだよ、と教えてあげる必要アル
// // const userInput = <HTMLInputElement> document.getElementById("user-input")!;  //ver1 <HTML->でHTMLのモノと教えて、!でnullじゃないよーと教えてあげる
// const userInput = document.getElementById("user-input")! as HTMLInputElement; //ver2
// userInput.value = "Hi there!";
// interface ErrorContainer {
// 	[prop: string]: string; // property nameとhow many properties使うか分からないとき
// }
// const errorBAg: ErrorContainer = {
// 	email: "Not a valid email",
// 	userName: "too long",
// };
//# sourceMappingURL=tsAdvanced.js.map