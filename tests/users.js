/**
 * This is the first line of test code i write
 * Thanks to scotch.io for teaching
 * @type {string}
 */
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User     = require('../models/User');

let chai     = require('chai');
let chaiHttp = require('chai-http');
let server   = require('../server');
let should   = chai.should();

chai.use(chaiHttp);

/**
 * Remove all from the test db before testing
 */
describe('Users', () =>{
    beforeEach((done) =>{
        User.remove({}, (err) =>{
            done();
        });
    });
});

/**
 * Test routes
 */
describe('GET /users/:id', () =>{
    it('should GET error 404', (done) =>{
        chai.request(server)
        .get('/users/1')
        .end((err, res) =>{
            res.should.have.status(404);
            done();
        });
    });
});
