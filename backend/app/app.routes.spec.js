// const app = require("../server");
// const mongoose = require("mongoose");
// const supertest = require("supertest");

// beforeEach((done) => {
//   mongoose.connect("mongodb://localhost:27017/test_db",
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => done());
// });

// afterEach((done) => {
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done())
//   });
// });


// test("GET /api/address", async () => {

//   await supertest(app).get("/api/address")
//     .expect(200)
//     .then((response) => {
//       // Check type and length
//       expect(Array.isArray(response.body)).toBeTruthy();
//       expect(response.body.length).toEqual(1);
//     });
// });

// test("POST /api/address", async () => {
//   const data = { name: "ABC", email: "abc@abc.com" };

//   await supertest(app).post("/api/address")
//     .send(data)
//     .expect(200)
//     .then(async (response) => {
//       // Check the response
//       expect(response.body.id).toBeTruthy();
//       expect(response.body.name).toBe(data.name);
//       expect(response.body.email).toBe(data.email);

     
//     });
// });

// test("GET /api/posts/:id", async () => {
//   const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

//   await supertest(app).get("/api/posts/" + post.id)
//     .expect(200)
//     .then((response) => {
//       expect(response.body._id).toBe(post.id);
//       expect(response.body.title).toBe(post.title);
//       expect(response.body.content).toBe(post.content);
//     });
// });



// test("DELETE /api/posts/:id", async () => {
//   const post = await Post.create({
//     title: "Post 1",
//     content: "Lorem ipsum",
//   });

//   await supertest(app)
//     .delete("/api/posts/" + post.id)
//     .expect(204)
//     .then(async () => {
//       expect(await Post.findOne({ _id: post.id })).toBeFalsy();
//     });
// });