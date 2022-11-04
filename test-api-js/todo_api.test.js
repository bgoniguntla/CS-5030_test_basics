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

test("delete /", (done) => {
    let title = "T2"
    request(app).delete("/tododelete/T2")
    .end((err, res)=>{
        console.log(res.body)
        expect(res.body.length).toBe(2)
        if(err) return done(err);
        return done();
    })  
})

test("update todo /", (done) => {
    let record = {
        "title": "T3",
        "description": "update testing",
        "done": false
    }

    request(app).put("/todoupdate/T3")
    .send(record)
    .expect('Content-Type', /json/)
    .end((err, res)=>{
        expect(res.body.length).toBe(3)
        if(err) return done(err);
        return done();
    })
            
})

});