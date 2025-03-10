let fruit = "Apple";
// We can re-assign let variable but can not re-declare the variable
fruit = "Mango";

const books = "Nepali";
// We can not reassign and redeclare const variable.
// book = "English"

{
  const books = "Rich Dad and Poor Dad";
}

console.log("Consoling the let keyword", fruit);
console.log("====================================");
console.log("Consoling the book", books);
console.log("====================================");
console.log("books", books);

let isValid = true;
let isSelected = null;

// Here we declare a variable, but didn't assign a value for gree variable so it will return undefined.
let greet;

console.log("====================================");
console.log("types of variable", typeof isValid);
console.log("greet", greet);
console.log("====================================");

// Numbers
let x = 100;
let y = 200;
let sum = x + y;

console.log("====================================");
console.log("The sum of ", x, "and ", y, "is: ", sum);
console.log("====================================");

let person = {
  name: " Himal Tamang",
  age: 23,
  college: "Kings College Nepal",
  subject: "BSIT",
};

console.log("person details", person);
console.log("Name: ", person.name);
console.log("Age: ", person.age);
console.log("College: ", person.college);
console.log("Subject: ", person.subject);

// collection of objects as in array
const persons = [
  {
    name: " Himal Tamang",
    age: 23,
    college: "Kings College Nepal",
    subject: "BSIT",
  },
  {
    name: " Himal Tamang",
    age: 23,
    college: "Kings College Nepal",
    subject: "BSIT",
  },
];

console.log("Array results");
console.log(persons);

persons.map((person) => {
  console.log("Name: ", person.name);
  console.log("Age: ", person.age);
  console.log("College: ", person.college);
  console.log("Subject: ", person.subject);
  console.log(
    `Hi, I am ${person.name} and i am a ${person.subject} student at ${person.college}`,
  );
});
