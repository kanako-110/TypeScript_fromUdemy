// inferの方が良いが、type書くなら..
// const person: {
// 	name: string;
// 	age: number;
//   hobbies: string[];
//   role:[number, string]
// } = {
// 	name: "Kanako",
// 	age: 23,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}
const person = {
	name: "Kanako",
	age: 23,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN,
};

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];

console.log(person.name);

person.role[1] = "10";

for (const hobby of person.hobbies) {
	console.log(hobby);
}
