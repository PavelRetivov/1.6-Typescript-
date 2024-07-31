// 1. 

function getFirstWord(a: string) {
	return a.split(/ +/)[0].length;
}

// 2. 

function getUserNamings(a: {name :string, surname: string} ) {
  return { 
		fullname: a.name + " " + a.surname, 
		initials: a.name[0] + "." + a.surname[0] 
	};
}

// 3. 

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a: {products: [{name: string}]} ) {
  return a?.products?.map(prod => prod?.name) || [];
}

// 4.1

// easy way is using 'as' keyword
// hard way is ?...
{function hey(a: {name: () => string, cuteness?: number, coolness?: number}) {
    return "hey! i'm " + a.name();
}
hey({name: () => "roman", cuteness: 100 })
hey({name: () => "vasyl", coolness: 100 })
}
// 4.2
{
class Dog{
name: string;

constructor(name: string, ok: number){
this.name = name;
}
}
class Cat{
name: string;

constructor(name: string, ok: boolean){
this.name = name;
}
}
function hey(abstractPet:  Cat | Dog | {name:string}) {
    return "hey! i'm " + abstractPet.name;
}
let a = new Cat("snizhok", true);
let b = new Dog("sirko", 333)  
hey(a)
hey(b)
}
// 4.3

function hey(a: {name: () => string, type: string, cuteness?: number, coolness?: number}) {
    return "hey! i'm " + a.name()
		 + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
hey({name: () => "snizhok", type: "cat", cuteness: 100})
hey({name: () => "sirko", type: "dog", coolness: 100})

// 5.

// google for Record type
function stringEntries(a: object) {
   return Array.isArray(a) ? a : Object.keys(a)
}

// 6.
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number) {
    return "*".repeat(a)
}
const hello = async () => {
   return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))