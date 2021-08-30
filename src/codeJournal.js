/* function callMe(name) {
  console.log(name)
} */

/* const callMe = function(name) {
  console.log(name)
} */

const callMe = name => console.log(name)

callMe('Thor')

function getScores() {
  return [70, 80, 'Some name', [{id: 1, foo: 'bar'}, {id: 2, foo: 'baz'}]];
}

let [x, y ,...args] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]

const user = {
  id: 42,
  model: 'Corvair',
  isVerified: true,
};

const {id, model, isVerified} = user;

console.log(id); // 42
console.log(model); // Corvair 
console.log(isVerified); // true

const topics = () => [ 'cars', 'code', 'LoL', 'Starcraft']

const [, one, two, ,] = topics()

console.log(one, two) 

function getScores2() {
  return ['cars', 'code', 'LoL', 'Starcraft'];
}

let [a, b, c] = getScores2();

console.log(a); // 70
console.log(b); // 80
console.log(c); // undefined

