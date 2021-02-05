console.log('destructuring.js');

const person = {
  name: 'Matt',
  age: 29,
  location: {
    city: 'Lambertville',
    temp: 71
  }
}

const {name, age, location: { city, temp } } = person;

console.log(`${name} is ${age} years old. He lives in ${city} and the temperature is ${temp} degrees.`)