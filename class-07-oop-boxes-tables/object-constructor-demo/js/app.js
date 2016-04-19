'use strict';

// Demo for objects to constructors

var jeff = {
  course: '201d4',
  firstName: 'Jeff',
  lastInitial: 'G',
  faveNumber: 10,
  isCodeNinja: true,
  intro: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// What if... I had a function to make many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make Jeff:
var jeff = new Student('Jeff', 'G', 24);

function Student(firstName, lastInitial, faveNumber){
  this.course = '201d4';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.intro = function () {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// What if I wanted to make an array of students?
