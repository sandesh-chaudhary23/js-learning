const arr=[10,20,30,40,50]
const arr2=new Array(0,1,2,3,4)
console.log(arr[1]);
console.log(arr2[1]);
arr.push(6)
arr.push(7)
arr.pop()
arr.unshift(9)
arr.shift()

console.log(arr.includes(8));
console.log(arr.indexOf(6));

const arr3=arr.join()
console.log(arr);
console.log(arr3);


// slice and splice 
 console.log("A",arr);
 const myarr1=arr.slice(1,3)
 console.log(myarr1);
 console.log("B",arr);
 const myarr2=arr.splice(1,3)
 console.log(myarr2);
 console.log("C",arr);