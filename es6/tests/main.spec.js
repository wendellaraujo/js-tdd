var expect = require('chai').expect

describe('Main', function(){
    var arr;

    before(function(){
        console.log('before');
    });

    after(function(){
        console.log('after');
    });

    beforeEach(function(){
        arr = [1,2,3];
    });

    afterEach(function(){
        console.log('afterEach');
    });

    it('should have a size of 4 when push another value to the array', function(){
        arr.push(4)
        expect(arr).to.have.lengthOf(4);
        console.log(arr.length);
    });

    it('should have a size of 2 when pop a value from the array', function(){
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });

    it('should remove the value 3 when use pop in the array', function(){
        arr.pop();
        expect(arr).to.not.include(3);
    });
})
