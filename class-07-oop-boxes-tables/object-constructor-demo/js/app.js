'use strict';

// Demo for objects to constructors

// var jeff = {
//   course: '201d4',
//   firstName: 'Jeff',
//   lastInitial: 'G',
//   faveNumber: 10,
//   isCodeNinja: true,
//   intro: function() {
//     console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
//   }
// };

// What if... I had a function to make many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make Jeff:
var mahClass = [];

function Student(firstName, lastInitial, faveNumber){
  this.course = '201d4';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.intro = function () {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
  mahClass.push(this);
};

var jeff = new Student('Jeff', 'G', 24);

var susan = new Student('Susan', 'B', 11);

var miguel = new Student('Miguel', 'A', 4);
// What if I wanted to make an array of students?
// Variable on line 19, code on line 30
// jeff, susan and miguel are all instances of Student
// jeff, susan and miguel all inherit from Student
