//Get elements here
let form = document.getElementById("form");

//Creating Elements
let topWrapper = document.createElement("div");
let nameLabel = document.createElement("label");
let nameInput = document.createElement("input");
let ageLabel = document.createElement("label");
let ageInput = document.createElement("input");
let br = document.createElement("br");
let gradeLabel = document.createElement("label");
let gradeInput = document.createElement("input");

//set attributes here
topWrapper.setAttribute("id", "topwrap");
nameLabel.setAttribute("id", "nameLabel");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "nameInput");
ageLabel.setAttribute("id", "ageLabel");
ageInput.setAttribute("id", "ageInput");
ageInput.setAttribute("type", "number");
gradeLabel.setAttribute("id", "gradeLabel");
gradeInput.setAttribute("type", "number");

//Append here
form.appendChild(topWrapper);
topWrapper.appendChild(nameLabel);
topWrapper.appendChild(nameInput);
topWrapper.appendChild(br);
topWrapper.appendChild(ageLabel);
topWrapper.appendChild(ageInput);
topWrapper.appendChild(br);
topWrapper.appendChild(gradeLabel);
topWrapper.appendChild(gradeInput);
//innerHTML
nameLabel.innerHTML = "Student Name:";
ageLabel.innerHTML = "Age:";
gradeLabel.innerHTML = "Grade:";

let course1 = ["French", "English", "Math", "SCience"];
let course2 = ["B.D.T", "Chemistry", "Physics", "Geography"];
let course3 = ["Government", "Accounting", "Finance", "Management"];
class Student {
  #name;
  #age;
  #grade;
  #gpa;

  constructor(name, age, grade, gpa) {
    this.#name = name;
    this.#age = age;
    this.#grade = grade;
    this.#gpa = gpa;
    this.course = "";
  }

  setName(Name) {
    if (Name != "") {
      this.#name = Name;
    } else {
      console.log("Pleaese enter your name");
    }
  }
  getName() {
    return this.#name;
  }

  setAge(Age) {
    if (Age > 16) {
      this.#age = Age;
    } else {
      console.log("Please enetr your actual age.");
    }
  }
  getAge() {
    return this.#age;
  }

  setGrade(Grade) {
    if (Grade > 0) {
      this.#grade = Grade;
    } else {
      console.log("Are you that dumb?");
    }
  }
  getnewGrade() {
    return this.#grade;
  }

  setnewGpa() {
    let Gpa = this.#grade / 20;
    this.#gpa = Gpa;
  }
  getnewGpa() {
    return this.#gpa;
  }

  setCourses() {
    if (this.#grade === 12) {
      this.course = course1;
    } else {
      this.course = course2;
    }
  }

  getCourses() {
    return this.course;
  }

  hello() {
    console.log(
      `Welcome ${this.#name}, you are ${this.#age} years old. You scored ${
        this.#grade
      }. Your gpa is ${this.#gpa} and your courses are ${this.course}`
    );
  }
}

// //Second Part

let pupilRoll = [];

function createStudent(name, age, grade, gpa) {
  // create student
  let newStudent = new Student(name, age, grade, gpa);
  console.log(newStudent);
  // return student
  return newStudent;
}
function enrollStudent(student) {
  //append student to studentRoll array
  pupilRoll.push(student);
}
function searchStudent(stud) {
  return pupilRoll.filter((A) => A.getName().includes(stud));
}
function filterStudentsByGrade(grad) {
  return pupilRoll.filter((A) => A.getGrade() === grad);
}
function filterStudentsByAge(minAge, maxAge) {
  return pupilRoll.filter((A) => A.getAge() >= minAge && A.getAge() <= maxAge);
}
