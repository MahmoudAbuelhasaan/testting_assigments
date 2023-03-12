// let sum=require('../index.js');
// let element=require('../index.js');

const { describe } = require("mocha");
let index = require("../index.js");

var expect = require("chai").expect;
var assert = require("chai").assert;
var should = require("chai").should();

describe("This is to test capitalizeText function", function () {
  it("test that the function takes a string  it will return a string", function () {
        
        expect(index.capitalizeText("hamada")).to.be.an("string");
      });

  it("test that the function takes a string and return it after capitalize it", function () {
        index.capitalizeText("hamada").should.equal("HAMADA");
      });

  it("test if the function takes number it will throw type error says parameter should be string", function () {
      expect(function (){
        index.capitalizeText(12)
      }).to.be.throw(TypeError,"parameter should be string");
      });
})


describe("This is to test createArray function", function () {
  var i=1
  this.beforeEach(function () {
    i++;
  })


  it("test that the return value of type array", function () {
        assert.isArray(index.createArray(i))
      });

  it("test if we pass 3 it will return array of length 3 and test it's include 1", function () {
        expect(index.createArray(i)).to.be.an("array").include(1).length(3);
      });
  
  setTimeout(function(){
    console.log("finsh dalay");
  },5000);
})



describe.skip("This is pendeng to test createArray function", function () {
  it("test if we pass 3 it will return array of length 3 and test it's include 1", function () {    
    expect(index.createArray(i)).to.be.an("array").include(1).length(3);
      });
    })

//before
//after
//beforeeach
//aftereach
//only,skip
//delay

// describe.skip("This is to test sum function", function () {
//   // before(function(){
//   //     console.log('befor all');
//   // })
//   // after(function(){
//   //     console.log('after all');
//   // })
//   // this.beforeEach(function(){
//   //     console.log('before each');
//   // })
//   // this.afterEach(function(){
//   //     console.log('after each');
//   // })
//   //test cases
//   it("test if take 2 positive return sum using expect", function () {
//     expect(index.sum(1, 2)).to.be.equal(3);
//   });

//   it("test if take 2 positive return sum using assert", function () {
//     assert.equal(index.sum(1, 2), 3);
//   });

//   it("test if take 2 positive return sum using sholud", function () {
//     index.sum(1, 2).should.equal(3);
//   });
// });

// describe.skip("Here we test converToArray function", function () {
//   it("return type of converToArray is array", function () {
//     // assert.isArray(index.converToArray(1, 2));
//     //chaining
//     // expect(index.converToArray(1, 2)).to.be.an("array").include(2).length(2);
//     index.converToArray(3, 4, 5).should.be.an("array").that.includes(4);
//   });
//   it("return array of converToArray contain spacific value", function () {
//     assert.include(index.converToArray(3, 7, 9), 9);
//   });
//   it("length of returned array from converToArray  ", function () {
//     assert.lengthOf(index.converToArray(4, 8, 9, 0, 5), 5);
//   });
// });

// describe.skip("Here we test division function", function () {
//   //
//   it("function will throw error if one of its args is equal to Zero", function () {
//     expect(function () {
//       index.division(0, 1);
//     }).to.throw(TypeError, "plz enter valid numbers");
//   });

//   it("test that if passing non zero args function will return division of 2 numbers", function () {
//     expect(index.division(6, 2)).to.equal(3);
//   });
// });

// describe("testing call api", function () {
//   // var data;
//   // before(function(){
//   //     index.callApi().then(function(element){
//   //        data=element;
//   //     })
//   // })
//   it("calling api function", function () {
//     index.callApi().then(function (element) {
//       expect(element).to.be.an("object");
//     });
//   });

//   // it('test returned from api calling',function(){
//   //     expect(data).to.be.an('object');
//   // })
// });

// describe("This is to test sum function", function () {
//   //test cases
//   it("test if take 2 positive return sum", function () {
//     expect(index.sum(1, 2)).to.be.equal(3);
//   });

//   it("test if take 2 string sholud throw error ", function () {
//     expect(function () {
//       index.sum('amira',3);
//     }).to.throw(TypeError, "only numbers allowed");
//   });
// });

// setTimeout(function () {
//   run();
// }, 3000);

// describe("test behavior of counter function", function () {
//   it("test increse function inside count that increase counterNumber by 1", function () {
//     var obj = new index.counter();
//     var beforeCallIncrease = obj.counterNumber;
//     var afterCallIncrease = beforeCallIncrease + 1;
//     expect(obj.increase()).to.be.equal(afterCallIncrease);
//   });
// });
