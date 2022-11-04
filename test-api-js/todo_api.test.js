const request = require("supertest");

const app = require("./index");

describe("todo api test suite", () => {
   
    test("GET /",(done)=>{
        request(app).get("/todolist")
                    .expect('Content-Type', /json/)
                    .expect(200)
                    // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                        if(err) return done(err);
                        
                        return done();
                    })
});
test("add todo /",  (done) => {
    let record = {
        "title": "Test",
        "description": "Testing",
        "done": false
    }
    request(app).post("/todoadd")
    .send(record)
    .expect('Content-Type', /json/)
    .end((err, res)=>{
        expect(res.body.length).toBe(4)
        if(err) return done(err);
        
        return done();
    })
})
});