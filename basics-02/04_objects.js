// const tinderUnser = new Object() //singleton
// const tinderUnser ={} //non singleton
// tinderUnser.id="123abc"
// tinderUnser.name="franikin"
// tinderUnser.isLoggedIn= false 
 
// // console.log(tinderUnser)

// const regularuser={
//     email:"frankin@blabla",
//     fullname:{
//         userfullname:{
//             firstname:"frankin",
//             lastname:"uuuuuuu"
//         }
//     }
// } 
// console.log(regularuser.fullname.userfullname.firstname); // can use ? in the objects as something might not present so it will not show the error .

// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"a",4:"b"}

// // const obj3 ={obj1,obj2} // it will make object inside object 
// // const obj3c= Object.assign({},obj1,obj2) //{} an optional parameter ggod for reuslt 
// const obj3 = {...obj1,...obj2} // best way and simple 

// console.log(obj3);

// const users =[ // dataa comes in array which stires objects in it 
//     {
//         id : 1,
//         email:"frankin@gmail.com"
//     }
//     {
//         id : 1,
//         email:"frankin@gmail.com"
//     } 
//     {
    
//         id : 1,
//         email:"frankin@gmail.com"
//     }  
// ]
// console.log(users[1].email);
// console.log(tinderUnser)

// console.log(Object.keys(tinderUnser));
// console.log(Object.values(tinderUnser));
// console.log(Object.entries(tinderUnser));

// console.log(tinderUnser.hasOwnProperty('isLogged '));

const course ={
    coursename :"js in hindi",
    price: "999",
    courseInstructor:"frankin"

}
// course.courseInstructor

const {courseInstructor: Instructor}= course
console.log(Instructor);

//api

// {
//     "name":"frankin",
//     "coursename" :"js in hindi",
//     "price": "999",
// }
[
    {},
    {},
    {}
]
