function sayMyName (){
    console.log("f");
    console.log("r");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("n");
}

// sayMyName()

// function addTwoNumbers(number1,number2){ // the value passed are parameters 
//     console.log(number1+number2);
// }

// addTwoNumbers(3,5)
// addTwoNumbers(3,"5")
// addTwoNumbers(3,null)  //etc many more // tthe value passed are arguments 

// const result =addTwoNumbers(3,5)
// console.log("Result: ",reuslt);   // this will be undefiend 

function addTwoNumbers(number1,number2){ // the value passed are parameters 
    // let result=number1+number2 
    // return result //there is one more way 
    return number1+number2

    // console.log("frankin") // it wot work as the console can print anyhting after return 
}
const result =addTwoNumbers(3,5)
// console.log("Result: ",reuslt); 

function loginUsermessage(username="sam"){
    if(!username){
        console.log("please enter a usner name");
        return
    }
    return `${username}just logged in `
}
console.log(loginUsermessage("frankin"))
// console.log(loginUsermessage(""))
// console.log(loginUsermessage( ))// it will print undefiend 

function calculatecartPrice(...num1){
    return num1
}
console.log(calculaterCartPrice(200,400,500))

function calculatecartPrice(val1,val2,...num1){
    return num1
}
console.log(calculaterCartPrice(200,400,500,600,700,800))
const user={
    sername :"frankin",
    price:199
}
function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
}

// handelObject(user)
handelObject({
    usename: "frankin",
    price:199
})

const myNewArray =[10,20,30,40]

function returnSecondvalue(getarray){
    return getarray[1]
}
// console.log(returnSecondvalue(myNewArray)); 
console.log(returnSecondvalue([10,20,30,40])); 