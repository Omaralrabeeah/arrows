/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
let person = {
  name: "omar",
  age: 35,
  city: "kuwait city",
};
console.log(person.name);

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "omaralrabeeah@hotmail.com";
person["email"] = "omaralrabeeah@hotmail.com";

console.log(person);

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

const p1 = { name: "John", age: 25 };
function test(obj, key) {
  if (obj[key]) return true;
  else return false;
}
test(p1, "city");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
	Q4) Create a function that accepts an array of objects called 'movies' 
and iterates through it to log the titles of all the movies.
********************************/

/******************************
	Q5) Create a function that accepts an array of objects called 'movies' 
and iterates through it to count how many movies were released in the year 1994.
********************************/
function printIt(x) {
  console.log(x.title);
}
movies.forEach(printIt);

/******************************
	Q6) Write a function that updates the genre of the movie "The Dark Knight"
 to "Action/Drama" and returns the modified array of movies.
********************************/

function updateName(arr) {
  const newArray = arr.map((x) => {
    if (x.title == "The Dark Knight") {
      x.genre = "Action/Drama";
    }
    return x;
  });
}
console.log(newArray);
return newArray;
updateName(movies);

const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

/**********
Question 1:
You have a function getStudentName(student) that:
- receives a student object
- returns the name of the student
Don't forget to uncomment the console.log
===
ANSWER: Alice
**********/

function getStudentName(student) {
  let name2 = student.name;
  return name2;
}
console.log(getStudentName(students[0]));

/**********
  Question 2:
  You have a function that:
  - recieves a student object
  - recieves a course index (number)
  - returns the course at the specified index in the student's courses array
	===
	ANSWER: Music
  **********/

function getCourse(student, courseIndex) {
  // Your code here
}
// console.log(getCourse(students[4], 2));

/**********
  Question 3:
  addCourseToStudent(student, course):
  - recieves a student object
  - recieves a course name (string)
  - adds the course to the student's courses array
  - returns the student object
	===
	ANSWER: 
	{
	  id: 8,
	  name: 'Helen',
	  courses: [ 'History', 'Art', 'PE', 'Physics' ]
	}
	**********/

function addCourseToStudent(student, course) {
  // Your code here
}

// console.log(addCourseToStudent(students[7], "Physics"));

/**********
  Question 4:
  countCourses(student):
  - recieves a student object
  - returns the number of courses the student is enrolled in
	===
	ANSWER: 4
  **********/
function countCourses(student) {
  // Your code here
}
// console.log(countCourses(students[1]));

/**********
  Question 5: 🌶️🌶️
  listAllCourses(students):
  - recieves an array of student objects
  - returns an array of all unique course names across all students
	===
	ANSWER: 
	[
	  'Math',    'Science',
	  'History', 'English',
	  'Art',     'Music',
	  'PE'
	]
  **********/
function listAllCourses(students) {
  // Your code here
}
// console.log(listAllCourses(students));

/**********
  Question 6:
  removeCourseFromStudent(course, student):
  - recieves a student object
  - recieves a course name (string)
  - removes the course from the student's courses array
  - returns the student object
  ===
  ANSWER:
  { id: 7, name: 'Grace', courses: [ 'Math', 'English', 'Music' ] }
  **********/

function removeCourseFromStudent(student, course) {
  // Your code here
}
// console.log(removeCourseFromStudent(students[6],"Science"));

/**********
  Question 7:
  findStudentById(studentId, students):
  - recieves a student id (number)
  - recieves an array of student objects
  - returns the student object with the matching id
  ===
  ANSWER: { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
  **********/

function findStudentById(studentId, students) {
  // Your code here
}

// console.log(findStudentById(10,students));

/**********
  Question 8: 🌶️🌶️🌶️
  getStudentsByCourse(course, students):
  - recieves a course name (string)
  - recieves an array of student objects
  - returns an array of student objects who are enrolled in the specified course
  ===
  ANSWER:
  [
  {
    id: 3,
    name: 'Charlie',
    courses: [ 'Science', 'English', 'Music' ]
  },
  { id: 5, name: 'Eva', courses: [ 'Science', 'Math', 'Music' ] },
  {
    id: 7,
    name: 'Grace',
    courses: [ 'Math', 'Science', 'English', 'Music' ]
  },
  { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
]
  **********/

function getStudentsByCourse(course, students) {
  // Your code here
}

// console.log(getStudentsByCourse("Music",students));
