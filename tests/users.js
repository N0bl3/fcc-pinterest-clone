/**
 * This is the first line of test code i write
 * Thanks to scotch.io for teaching
 * @type {string}
 */
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const User     = require('../models/User');
const Picture  = require('../models/Picture');

const chai     = require('chai');
const chaiHttp = require('chai-http');
const server   = require('../server');
const should   = chai.should();

chai.use(chaiHttp);

/**
 * Remove all from the test db before testing
 */
describe('Users', () =>{
    let user = new User;

    beforeEach((done) =>{
        User.remove({}, (err) =>{
            Picture.remove({}, (err) =>{
                let picture = new Picture;
                picture.url = 'test';

                picture.save((err) =>{

                    user.twitter = {
                        id: 'test'
                    };
                    user.pictures.addToSet(picture.id);
                    user.save(err =>{
                        done();
                    });
                });
            });
        });
    });

    it('asking for existing user should GET its wall', (done) =>{
        User.findOne({}, (err, user) =>{

            chai.request(server)
            .get(`/users/${user.twitter.id}`)
            .end((err, res) =>{
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
        });
    });

    it('asking for non existing user should GET error 404', (done) =>{
        chai.request(server)
        .get('/users/1')
        .end((err, res) =>{
            res.should.have.status(404);
            done();
        });
    });

    it('should redirect unauthenticated users to index and authenticated users to index', (done) =>{
        chai.request(server)
        .get('/users')
        .end((err, res) =>{
            res.should.redirect;
            done();
        });
    });
});
