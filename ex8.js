const user = {
	name: "Alice",
	email: "alice@example.com",
	age: 25,
	address: "123 Main St",
	skills:["html", "css"]
};

const {age} = user;

const new_age = age;

console.log(new_age);


const [fist_skill, second_skill] = user.skills;
console.log(fist_skill);
console.log(second_skill);

const createUser = (name = "Guest", role = "Viewer", status = "Active") => ({ name, role, status });

console.log(createUser());
console.log(createUser("Bob"));
console.log(createUser("Bob", "student"));
console.log(createUser("Bob", "student", "sleeping"));
