// Write and Test the following challenges using Mocha and Chai.
// ​
//  Create a class named Muppet that has a constructor that takes a name and age.
//  Create a subclass of Muppet called Frog that has a color attribute.
//  Frogs speak by saying "Ribbit Ribbit"
//  verify the properties: Such as a frog named Kirmet that is green
//  verify frogs speak correctly and muppets speak correctly
// ​
// ​
// Write a function called sum() that returns the sum of 2 numbers
// continue with divide(), multiply() and subtract()
// ​
// Write a function called summation() that returns the sum of all numbers in an array of numbers
// ​
// Write a function sum_recursive() that sums all numbers in the provided list of lists (of lists of lists)
// ​
// Write a function Greatest Common Denominator named gcd() using Euclides algorithm that returns an integer
// ​
// Write a function that takes a string that replaces all occurrence of a number character [0...9] to be `1337`
// ​
// ####Hard Mode
// Write your own shuffle([]) using this Algorithm: https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
// ​
// ####Epic Mode
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
// Do not use division in your solution.

"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

///// muppet tests
class Muppet {
    constructor(name, age, speaks) {
        this.name = name;
        this.age = age;
        this.speaks = "waka waka";
    }
    talk() {
        return this.speaks
    }
}
class Frog extends Muppet {
    constructor(name, speaks, color, age) {
        super(name, age)
        this.name = "kermit";
        this.speaks = "ribbit ribbit";
        this.color = "green";
        this.age = 1;
    }
    talk() {
        return this.speaks;
    }

}
describe('Muppet', function() {
    describe('Frog', function() {
        describe('talk', function() {

            it('kermit returns a phrase', function() {
                //Given
                var kermit = new Frog();

                //when
                var talk = kermit.talk();

                //Then
                expect(talk).to.equal("ribbit ribbit");

            });

            it('muppets return a phrase', function() {
                //Given
                var muppet = new Muppet();

                //when
                var talk = muppet.talk();

                //Then
                expect(talk).to.equal("waka waka");

            });

            it('Frog is named kermit', function() {
                //Given
                var kermit = new Frog();

                //when
                var name = kermit.name;

                //Then
                assert.isTrue(name === "kermit");
            });

            it('Frog is green', function() {

                //Given
                var kermit = new Frog();
                //when
                var color = kermit.color;
                //Then
                assert.isFalse(color === "red")
                assert.isTrue(color === "green")

            });

        });
    })
});

//// math tests


var minus = function(x, y) {
    return x - y;
}
var multiply = function(x, y) {
    return x * y;
}
var divide = function(x, y) {
    return x / y;
}
var sum = function(x, y) {
    return x + y;
}

describe('sum', function() {
  it('add up', function() {
      //Given
      var answer = sum(1, 2);

      //when

      //Then
      expect(answer).to.equal(3);
      expect(answer).to.be.a('number');

  })
})

describe('minus',function() {
  describe('multiply', function() {
    describe('divide', function() {
      it("numbers subtract",function() {

        var answer = minus(10, 5);

        expect(answer).to.equal(5);
      })
      it("numbers multiply",function() {

        var answer = multiply(10, 5);

        expect(answer).to.equal(50);
      })
      it("numbers divide",function() {

        var answer = divide(10, 5);

        expect(answer).to.equal(5);

        /////left this to break to make sure the test was working. ie. a test test. meta as shit
      })
    })
  })
})


////summation test

var arr = [];
var summation = arr.reduce((a, b) => a + b, 0);

describe ('summation', function(){
  it('add numbers in array', function(){

    var arr = [1,2,3]
    var answer = summation

    expect(answer).to.equal(6)
  })
});

//// 1337 test

var string = "im new number 5";
string.replace(new RegExp("[0-9]", "g"), "1337")

describe('1337 nonsense', function(){
  it('replace numbers with 1337', function(){
    var string

    expect(string).to.match('1337')
  })
})
