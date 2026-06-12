const avengers =["ironman","captain A","thor","hulk"]
const dc =["superman","batman","flash"]
// avengers.push(dc)
// console.log(avengers);
// console.log(avengers[3][1]);

// const allheroes=avengers.concat(dc)
// console.log(allheroes);

// ...spread operator...
// const allnewheroes =[...avengers,...dc]
// console.log(allnewheroes);


// const another_array = [1,2,3,[4,5,6],7,[8,9,10,[11,12]]]
// const real_array =another_array.flat(Infinity)
// console.log(real_array);
console.log(Array.isArray("frakin"))
console.log(Array.from("frakin"))
console.log(Array.from({name:"frakin"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));