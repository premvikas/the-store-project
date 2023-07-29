// @ts-nocheck
import supertest from "supertest";
import {app} from '../index';

const userPayload = {
    firstName: "test",
    lastName: "test",
    emailId: "test@test.co"
};

const faultyUserPayload = {
    firstName: null,
    lastName: "test",
    emailId: "test"
}


describe('product', () => {

    describe('get user route', () => {

        describe('given the query is correct', () => {

            it('should return a 200', async() => {
                
                const {statusCode, body} = await supertest(app).get(`/api/user/getUsers`);
                expect(statusCode).toBe(200);
            })

        });
    })

    describe('create product', () => {

        describe('Given the payload is correct', () => {

                it('should return a 200', async() => {

                    const {statusCode} = await supertest(app).post('/api/user/createUser').send(userPayload);
                    expect(statusCode).toBe(200);
                })
        });

        describe('Given the payload is not correct',  () => {

                it('should return a 422', async() => {

                    const {statusCode} = await supertest(app).post('/api/user/createUser').send(faultyUserPayload);
                    expect(statusCode).toBe(422);
                })
        });
    });
})