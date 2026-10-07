let student1 = [
	"Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah", "Ian", "Julia",
	"Kevin", "Lily", "Mason", "Nora", "Oliver", "Penny", "Quinn", "Ryan", "Sophia", "Thomas",
	"Uma", "Victor", "Wendy", "Xander", "Yara", "Zane"
];

let student2 = [
	"Aaron", "Bella", "Caleb", "Diana", "Ethan", "Fiona", "Gavin", "Hazel", "Isaac", "Jasmine",
	"Kyle", "Luna", "Miles", "Natalie", "Owen", "Piper", "Qasim", "Rachel", "Sam", "Tessa",
	"Ulysses", "Violet", "Wyatt", "Xena", "Yusuf", "Zoe"
];

let studentconcat = student1.concat(student2);

console.log(studentconcat);

studentconcat.sort()

console.log(`sorted array: ${studentconcat}`);

studentconcat.reverse()

console.log(`reversed array: ${studentconcat}`);

// let search = "Diana";
let does_exist = studentconcat.includes("Diana");
console.log(`does the name "Diana" in the array of students?
${does_exist}`);

studentconcat.forEach(function(std, id)
{
	console.log(id + " : " + std);
});