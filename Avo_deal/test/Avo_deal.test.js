const assert = require('assert');
var RealDeal = require('../Avo_deal')
describe("The best deal", function() {

  it("should be able to slpit the deal", function() {
    assert.equal(4, RealDeal.length);
  });
  it("should remove 'R'", function(){
    assert.equal(4,RealDeal.length)
  });
});
