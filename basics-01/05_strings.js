const name ="frankin"
const repocount = 50

console.log(name +repocount + "value");

// bad practise outdated 

console.log(`my name is ${name} and my repo count is ${repocount} `);
// this is called string interpolaration.

// another way of assigning string is 
const gameName=new String('frankin-uuuu')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-8 ,5)
console.log(anotherString);


const newStringOne="   frankin   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https//frankin.com/frankin%20bgmi"
console.log(url.replace('%20','-'))
console.log(url.includes('frankin'))
console.log(gameName.split('-'));