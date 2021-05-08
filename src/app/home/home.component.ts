import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showCourseField = false;
  courseName;
  courseAdded;
  courseObject: any;
  courseArray = [];

  addStudentButton = false;
  studentCourse: any;
  isCourseSelected = false;
  studentArray = [];
  studentAdded;
  studentName;
  studentObject: Object;
  sIdCount = 0;

  showCourseStudents = [];
  courseStudents = [];

  constructor() {}

  //updating List on Chnage
  courseListUpdate() {
    this.courseName = this.courseName;
  }

  // hide add new course text field
  closeCourseField() {
    this.showCourseField = false;
  }

  // hide add student text field
  closeStudentField() {
    this.addStudentButton = false;
  }

  // add new course to the dropdown
  addCourseList() {
    this.courseArray.push(this.courseAdded);
    this.courseStudents[this.courseAdded] = []; //populating the course with an empty array to interpolate students
    this.closeCourseField();
    this.courseAdded = '';
    // console.log(this.courseStudents[this.courseAdded]);
  }

  //Managing; storing Course value to add Students to the selected course
  fetchSelectedValue() {
    this.studentCourse = this.studentCourse;
    // console.log(this.studentCourse);
    // console.log(this.isCourseSelected);
    this.isCourseSelected = true;
  }

  addstudentlist() {
    this.studentObject = {
      id: ++this.sIdCount,
      student: this.studentName,
      course: this.studentCourse
    };

    this.studentArray.push(this.studentObject); //appending student object to student array
    this.courseStudents[this.studentCourse].push(this.studentObject); //appending student object to the selected course

    console.log(this.courseStudents[this.studentCourse]);
    console.log(this.courseStudents);

    this.studentName = '';
    this.closeStudentField();
  }

  ngOnInit(): void {}
}
