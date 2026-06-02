// primitive datatypes 

// 7 types :string,number,boolean,null,undefined,symbol,BigInt
const score =100
const scoreValue=100.33
const isloggedIn = false
const outsideTemp =null
let userEmail;
const id  =symbol("123")
const anotherid  =symbol("123")
const bigNumber =33387687938n

// refernce (non primitive)
// array, objects ,functions
const avengers =["Captain America","ironMan","Thor","Hulk"];
let myobject ={
    name:"frankin",
    age:23,
}
const myFunction = function(){
    console.log("Avengers Assembelled")
}
// all return type is function 
//  function value = function object 
// to know the type of vlaue 
console.log(typeof bigNumber);
null =object 
undefiend = undefiend 
boolean =boolean 
string =string 
number =number  

// ++++++
// stack(primitive)will get the copy   ,   heap(non primitive) will get the refrence of the original value
// primitive type 
let myYTname ="frankingaming"
let anothername = myYTname
anothername="frankinvlogs"
console.log(myYTname);
console.log(anothername);

// nonprimitive type 
let user1={
    email:"user@google.com",
    upi: "user@hdfcbank"
}
user2=user1
user2.email ="frankin@google.com"
console.log(user1.email);
console.log(user2.email);