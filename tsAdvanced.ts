type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// 上記二つを含ませたい
type ElevatedEmployee = Admin & Employee; //&を使う。interfaceでextendsも使えるが、それだとunionが使えない

const e1: ElevatedEmployee = {
	name: "Max",
	privileges: ["privilege1"],
	startDate: new Date(),
};

type Combine = string | number;
type Numeric = number | boolean;
type Universal = Combine | Numeric;

// Add1のreturnの中身までちゃんと指定したい
function Add1(a: number, b: number): number;
function Add1(a: string, b: string): string;
function Add1(a: string, b: number): string;
function Add1(a: number, b: string): string;
function Add1(a: Combine, b: Combine) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString() + b.toString();
	}
	return a + b;
}

const result1 = Add1("Max", "Ito");
result1.split("");


const userDate = undefined

const storeDate = userDate ?? "Default" //userDateの内容がtrue(null or undefined 以外, then return the left, otherwise the right)
console.log(storeDate)

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
