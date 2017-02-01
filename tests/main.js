process.env.NODE_ENV = 'test';

let chai   = require('chai');
let should = chai.should();

describe('True', () =>{
    it('is always true', (done) =>{
        should.equal(true, true);
        done()
    });
});
