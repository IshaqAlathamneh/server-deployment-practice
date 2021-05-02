'use strict';

const server = require('../server.js');
// server.app -> mock this server -> I dont have to run it here
const superTest = require('supertest');
const serverRequest = superTest(server.app);// this will be my fake server

describe('Testing Server Module', ()=> {
    it('handles not found routes', async ()=> {
        let response = await serverRequest.get('/not-found-route');
        expect(response.status).toEqual(404);
    });

    it('handles errors', async ()=> {
        let response = await serverRequest.get('/bad-request-2');
        expect(response.status).toEqual(500);
    });

    it('handle home route', async ()=> {
        let response = await serverRequest.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello from Server home route');
    });
    it('handle home route', async ()=> {
        let response = await serverRequest.get('/data');
        expect(response.status).toEqual(200);
        // console.log(response);
        expect(response.body).toEqual({
            name: "ishaq",
            age: 22
        });
    });
});