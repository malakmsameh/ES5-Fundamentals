const product = {
	id:1,
	name:"mug",
	price:5,
	category:"home accesory",
	available:true
}

const product_string = JSON.stringify(product);
// console.log(`its a string : ${product_string}`);

try{
	const toobj = JSON.parse(jsonString);
	console.log(`this is the original : ${product} ,
this is the converted : ${toobj}`);

// const invalid = "{ id: 101, name: 'Bad JSON' }";
// JSON.parse(invalid);

}
catch (error)
{
	console.error("Caught an error while parsing JSON:", error.message);
}