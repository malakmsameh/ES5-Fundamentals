const students = [
	{ id: 1, name: "Alice Smith", grade: 85 },
	{ id: 2, name: "Bob Johnson", grade: 92 },
	{ id: 3, name: "Charlie Williams", grade: 78 },
	{ id: 4, name: "Diana Brown", grade: 64 },
	{ id: 5, name: "Ethan Jones", grade: 95 },
	{ id: 6, name: "Fiona Garcia", grade: 88 },
	{ id: 7, name: "George Miller", grade: 72 },
	{ id: 8, name: "Hannah Davis", grade: 90 },
	{ id: 9, name: "Ian Rodriguez", grade: 81 },
	{ id: 10, name: "Jasmine Martinez", grade: 67 },
	{ id: 11, name: "Kevin Hernandez", grade: 75 },
	{ id: 12, name: "Laura Lopez", grade: 94 },
	{ id: 13, name: "Michael Gonzalez", grade: 82 },
	{ id: 14, name: "Nina Wilson", grade: 69 },
	{ id: 15, name: "Oscar Anderson", grade: 86 },
	{ id: 16, name: "Paula Thomas", grade: 91 },
	{ id: 17, name: "Quentin Taylor", grade: 77 },
	{ id: 18, name: "Rachel Moore", grade: 83 },
	{ id: 19, name: "Sam Jackson", grade: 59 },
	{ id: 20, name: "Tina Martin", grade: 96 },
	{ id: 21, name: "Victor Lee", grade: 70 },
	{ id: 22, name: "Wendy Perez", grade: 84 },
	{ id: 23, name: "Xander Thompson", grade: 73 },
	{ id: 24, name: "Yara White", grade: 89 },
	{ id: 25, name: "Zachary Harris", grade: 65 },
	{ id: 26, name: "Amy Clark", grade: 93 },
	{ id: 27, name: "Brian Lewis", grade: 76 },
	{ id: 28, name: "Chloe Robinson", grade: 87 },
	{ id: 29, name: "David Walker", grade: 62 },
	{ id: 30, name: "Emma Young", grade: 98 },
	{ id: 31, name: "Frank Allen", grade: 74 },
	{ id: 32, name: "Grace King", grade: 80 },
	{ id: 33, name: "Henry Wright", grade: 68 },
	{ id: 34, name: "Isabel Scott", grade: 91 },
	{ id: 35, name: "Jack Torres", grade: 79 },
	{ id: 36, name: "Kelly Nguyen", grade: 85 },
	{ id: 37, name: "Leo Hill", grade: 61 },
	{ id: 38, name: "Mia Flores", grade: 97 },
	{ id: 39, name: "Nathan Green", grade: 71 },
	{ id: 40, name: "Olivia Adams", grade: 88 },
	{ id: 41, name: "Peter Nelson", grade: 66 },
	{ id: 42, name: "Quinn Baker", grade: 90 },
	{ id: 43, name: "Rose Hall", grade: 77 },
	{ id: 44, name: "Sean Rivera", grade: 83 },
	{ id: 45, name: "Tara Campbell", grade: 94 },
	{ id: 46, name: "Uriel Mitchell", grade: 75 },
	{ id: 47, name: "Vera Carter", grade: 82 },
	{ id: 48, name: "Willie Roberts", grade: 63 },
	{ id: 49, name: "Xena Gomez", grade: 99 },
	{ id: 50, name: "Yusuf Phillips", grade: 80 }
];


students.splice(5, 1);

const sliced_arr = students.slice(0, 10);
console.log("first 10 students :", sliced_arr);

students.sort((a, b) => a.grade - b.grade);

students.forEach((student, index) =>
{
	console.log(`${index + 1}. ID: ${student.id} | Name: ${student.name.padEnd(16)} | Grade: ${student.grade}`);
});