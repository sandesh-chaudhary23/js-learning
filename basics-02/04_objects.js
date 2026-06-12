// const tinderUnser = new Object() //singleton
// const tinderUnser ={} //non singleton
// tinderUnser.id="123abc"
// tinderUnser.name="franikin"
// tinderUnser.isLoggedIn= false 
 
// console.log(tinderUnser)

const regularuser={
    email:"frankin@blabla",
    fullname:{
        userfullname:{
            firstname:"frankin"
            lastname:"uuuuuuu"
        }
    }
} 
console.log(regularuser.fullname.userfullname.firstname); // can use ? in the objects as something might not present so it will not show the error .

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 ={obj1,obj2} // it will make object inside object 
cosnt obj3c= Object.assign({},obj1,obj2) //{} an optional parameter ggod for reuslt 
console.log(obj3);