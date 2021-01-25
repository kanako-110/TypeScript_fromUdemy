"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Kanako",
    age: 23,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
