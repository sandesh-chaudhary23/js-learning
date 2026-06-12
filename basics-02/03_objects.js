// singleton
// Object.create
// if we declare it as litreals it will not be a singleton and if its declared from constructur it will be singleton 

//objects 

const mysym=Symbol("key1") //use symbol

const jsuser ={
    name:"frankin",
    "full name": "frankin uuu",
    age:21,
    [mysym]: "mykey1",
    email:"frankin@gmail.com",
    location:"bangaluru",
}
// console.log(jsuser.age);   //not the perfect way 

console.log(jsuser["age"]);
console.log(jsuser["full name"]);  // cant access form dot 
console.log(jsuser[mysym])

jsuser.email ="frankinuuuuuuu@gmail.com"
// Object.freeze(jsuser)
// jsuser.email ="frankintopppppppppppp@gmail.com"  // it wont chnage 
// console.log(jsuser);


jsuser.greeting =function(){
    console.log("hello js user ")
}
jsuser.greetingtwo =function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsuser.greeting()); // if we use without brackets it will only return the reference of the function 
console.log(jsuser.greetingtwo());