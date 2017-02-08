process.env.NODE_ENV = 'test';
const mongoose       = require('mongoose');
const Picture        = require('../models/Picture');
const chai           = require('chai');
const chaiHttp       = require('chai-http');
const server         = require('../server');
const should         = chai.should();

chai.use(chaiHttp);

describe('Pictures', () =>{

    beforeEach(done =>{
        Picture.remove({}, (err) =>{
            let picture         = new Picture;
            picture.url         = 'test';
            picture.description = 'description';

            picture.save((err) =>{
                done();
            });
        });
    });

    it('should GET nothing', (done) =>{
        chai.request(server)
        .get(`/pictures/${new mongoose.Types.ObjectId}`)
        .end((err, res) =>{
            res.should.have.status(404);
            done();
        });
    });

    it('should GET a picture page', (done) =>{
        Picture.findOne({}, (err, picture) =>{
            chai.request(server)
            .get(`/pictures/${picture.id}`)
            .end((err, res) =>{
                res.should.have.status(200);
                done();
            });
        });

    });

});
