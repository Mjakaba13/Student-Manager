class Student {
  #name;
  #age;
  #grade;
  #gpa;
  constructor(name, age, grade, gpa) {
    this.#name = name;
    this.#age = age;
    this.course = [];
    this.#grade = grade;
    this.#gpa = gpa;
  }
  course1 = ["French", "English", "Math", "SCience"];
  course2 = ["B.D.T", "Chemistry", "Physics", "Geography"];
  course3 = ["Government", "Accounting", "Finance", "Management"];

  setnewName(newName) {
    if (newName != "") {
      this.#name = newName;
    } else {
      console.log("Pleaese enter your name");
    }
  }
  getnewName() {
    return this.#name;
  }

  setnewAge(newAge) {
    if (newAge > 16) {
      this.#age = newAge;
    } else {
      console.log("Please enetr your actual age.");
    }
  }
  getnewAge() {
    return this.#age;
  }

  setnewGrade(newGrade) {
    if (newGrade > 0) {
      this.#grade = newGrade;
    } else {
      console.log("Are you that dumb?");
    }
  }
  getnewGrade() {
    return this.#grade;
  }

  setnewGpa() {
    let newGpa = this.#grade / 20;
    this.#gpa = newGpa;
  }
  getnewGpa() {
    return this.#gpa;
  }

  setCourses() {
    if (this.#grade === 12) {
      this.course = this.course1;
    } else {
      this.course = this.course2;
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

function createStudent(name, age, grade) {
  // create student
  let newStudent = new Student(name, age, grade);
  console.log(newStudent);
  // return student
  return newStudent;
}
function enrollStudent(student) {
  //append student to studentRoll array
  pupilRoll.push(student);
}
function searchStudent(stud) {
  return pupilRoll.filter((A) => A.getnewName().includes(stud));
}
function filterStudentsByGrade(grad) {
  return pupilRoll.filter((A) => A.getnewGrade() == grad);
}
function filterStudentsByAge(minAge, maxAge) {
  return pupilRoll.filter(
    (A) => A.getnewAge() > minAge && A.getnewAge() < maxAge
  );
}
