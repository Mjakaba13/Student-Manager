//Get elements here
let form = document.getElementById("form");
let table = document.getElementById("table-display");
let list = document.getElementById("list");

//Creating Elements
let topWrapper = document.createElement("div");
let midWrapper = document.createElement("div");
let botWrapper = document.createElement("div");
let nameLabel = document.createElement("label");
let nameInput = document.createElement("input");
let ageLabel = document.createElement("label");
let ageInput = document.createElement("input");
let br = document.createElement("br");
let gradeLabel = document.createElement("label");
let gradeInput = document.createElement("input");
let submitBtn = document.createElement("button");
let warn = document.createElement("p");
let warn2 = document.createElement("p");
let warn3 = document.createElement("p");

//set attributes here
topWrapper.setAttribute("id", "topwrap");
midWrapper.setAttribute("id", "midwrap");
botWrapper.setAttribute("id", "botwrap");
nameLabel.setAttribute("id", "nameLabel");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "nameInput");
ageLabel.setAttribute("id", "ageLabel");
ageInput.setAttribute("id", "ageInput");
ageInput.setAttribute("type", "number");
ageInput.setAttribute("min", "18");
ageInput.setAttribute("max", "30");
gradeLabel.setAttribute("id", "gradeLabel");
gradeInput.setAttribute("type", "number");
submitBtn.setAttribute("type", "submit");
warn.setAttribute("id", "warning");
warn2.setAttribute("id", "warning");
warn3.setAttribute("id", "warning");

//Append here
form.appendChild(topWrapper);
form.appendChild(midWrapper);
form.appendChild(botWrapper);
topWrapper.appendChild(nameLabel);
topWrapper.appendChild(nameInput);
topWrapper.appendChild(warn);
// topWrapper.appendChild(br);
midWrapper.appendChild(ageLabel);
midWrapper.appendChild(ageInput);
midWrapper.appendChild(warn2);
// topWrapper.appendChild(br);
botWrapper.appendChild(gradeLabel);
botWrapper.appendChild(gradeInput);
botWrapper.appendChild(warn3);
form.appendChild(submitBtn);
//innerHTML
nameLabel.innerHTML = "Student Name:";
ageLabel.innerHTML = "Age:";
gradeLabel.innerHTML = "Grade:";
submitBtn.innerHTML = "Submit";
warn.innerHTML = "Enter a valid name!";
ageInput.nextSibling.innerHTML = "Enter your real age!";
warn3.innerHTML = "Enter a grade!";

//Styles
warn.style.display = "none";
warn2.style.display = "none";
warn3.style.display = "none";
warn.style.color = "red";
warn2.style.color = "red";
warn3.style.color = "red";

let nameValue = nameInput.value;
let course1 = ["French", "English", "Math", "SCience"];
let course2 = ["B.D.T", "Chemistry", "Physics", "Geography"];
let course3 = ["Government", "Accounting", "Finance", "Management"];

class Student {
  //   #name;
  #age;
  #grade;
  #gpa;

  constructor(name, age, grade, gpa) {
    this.name = name;
    this.#age = age;
    this.#grade = grade;
    this.#gpa = gpa;
    this.course = "";
  }

  setName(nameValue) {
    if (nameValue != "") {
      this.name = nameValue;
    } else {
      console.log("Pleaese enter your name");
    }
  }
  getName() {
    return this.name;
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
      this.course = course3;
    }
  }

  getCourses() {
    return this.course;
  }

  hello() {
    console.log(
      `Welcome ${this.name}, you are ${this.#age} years old. You scored ${
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

function pupil(name, age, grade) {
  nameInput.value = name;
  let newPupil = new Student(name, age, grade);
  console.log(newPupil);

  //   submitBtn.addEventListener("click", () => {
  //     if (nameInput.value != " ") {
  //       Student.setName(nameInput);
  //       console.log(nameInput.value);
  //     } else {
  //       console.log("Are you mad");
  //     }
  //   });
}

function validator() {
  if (nameInput.value === "" || nameInput.value === " ") {
    warn.style.display = "block";
    return false;
  }
  if (ageInput.value === "" || ageInput.value < 18 || ageInput.value > 30) {
    warn2.style.display = "block";
    return false;
  }
  if (gradeInput.value === "") {
    warn3.style.display = "block";
    return false;
  }
  return true;
}
const count = {
  counter: 0,
  setCount(value) {
    this.counter += value;
  },
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validator();

  count.setCount(1);
  warn.style.display = "none";
  warn2.style.display = "none";
  warn3.style.display = "none";
  if (!validator()) {
    return false;
  }
  let person = new Student(nameInput.value, ageInput.value, gradeInput.value);
  let manes = nameInput.value;
  let ages = ageInput.value;
  let grades = gradeInput.value;
  person.setCourses();
  let courses = person.getCourses();
  pupilRoll.push(person);
  nameInput.value = null;
  ageInput.value = null;
  gradeInput.value = null;

  list.innerHTML += `
    <tr>
        <th scope="row" id="row1">${count.counter}</th>
        <td id="mana">${manes}</td>
        <td id="man">
          ${ages}
        </td>
        <td id="mana">${grades}</td>
        <td id="mana">${courses}</td>

    </tr> 

        `;
});
