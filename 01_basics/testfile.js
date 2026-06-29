let score ="10"

// console.log(score);
// console.log(typeof(score));
const studentArray1 = ["Azim", "Numan", "Ali", "Ahmed"];
const studentArray2 = ["Azim2", "Numan2", "Ali2", "Ahmed2"];
const studentArray3 = ["Azim3", "Numan3", "Ali3", "Ahmed3"];

// const studentArray3 = studentArray1.concat(studentArray2);

// const studentArray3 = studentArray1.concat(studentArray2);
const studentArray4 = [...studentArray1, ...studentArray2, ...studentArray3 ];
//console.log(studentArray4); 

const course = {
    coursename : "JavaScript",
    price : 1000,
    courseInstructor : "Azim"
}   

const {courseInstructor:instructor}= course;

console.log(instructor);