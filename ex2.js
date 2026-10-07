// person constructor
function person(name, age)
{
	this.name = name;
	this.age = age;
}

person.prototype.greet = function()
{
	return "Hello, my name is " + this.name;
};

function Employee(name, age, employeeId, position)
{
	// person.call(this, name, age);
	this.name = name;
	this.age = age;
	this.employeeId = employeeId;
	this.position = position;
}

Employee.prototype = Object.create(person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function()
{
	return "Hello, I am " + this.name + ", working as a " + this.position + ".";
};

var emp1 = new Employee("malak", 24, "a111", "Developer");
var emp2 = new Employee("asma", 23, "a222", "Manager");
var emp3 = new Employee("sondos", 22, "a333", "Designer");

console.log(emp1.greet());
console.log(emp2.greet());
console.log(emp3.greet());