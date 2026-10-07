
console.log(name);
var name = "Jone";
function test() {
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(y);
}

test();
// console.log(x);
// ------------------
// the outcome is propably for the first cgl == name and the second cgl == the value of y which is 20

// how hoisting works ?
// at the compilation time it moves the variable decliration to the top of the scope its currently in

// diff between scope block and function block ?
// block scope : variables declared using var can be accessed outside of its block ps the block is anything between {}
// however if its defined using let ot const they cant be accesed outside of the block

// function scope : nothing can be accessed from outside the function , like i cant access any variable no matter the type as long as im outside the function

// let name = "Jone";
// console.log(name);

function test()
{
	let x = 10;
	if (true)
	{
		let y = 20;
		console.log(y);
	}
}
test();