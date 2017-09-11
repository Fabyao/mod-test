const request = require('supertest');
const app = require('../../app.js');
const assert = require('assert');
const mongoose = require('mongoose');

const User = mongoose.model('userdata');

describe('User Controller', () => {

    it('Post to /api/users creates a new user', (done) => {
        User.count().then(count => {

            request(app)
                .post('/api/users')
                .send({
                    name: 'Integration Test',
                    age: 15,
                    country: 'fr',
                    sex: 'female'
                })
                .end((err, response) => {

                    User.count().then(newCount => {
                        assert(count + 1 === newCount);

                        assert.equal(true, !!response.body.dateCreated, 'date created is populated');
                        done();
                    });

                });
        });

    });

    xit('Should fail if the age is missing', ()=>{

    });
});