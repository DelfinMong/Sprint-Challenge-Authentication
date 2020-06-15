const request = require('supertest');

const server = require('./server')

describe('server.js', function () {
    describe('GET /', function () {
        it("should return 200 ok", function () {
           request(server)
           .get('/')
           .expect(200);
        }); 
 
        it("should return JSON", function () {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });
 
    })
 })

//  describe('/server.js', function () {
//     it('should return 200 status', function () {
//         return request(server)
//            .get('/jokes')
//            .then( res => {
//               expect(res.status).toBe(200);
//            })
//     })

//     it('should list of jokes', function () {
//         return request(server)
//           .get('/jokes')
//           .then(res => {
//               expect(res.body).toStrictEqual(expect.any(Array)) // do not use toBe
//           })
//     })

//     it('find a single joke', function () {
//         return request(server)
//           .get('/jokes')
//           .then(res => {
//               console.log(res.body)
//               expect(res.body[1].name).toBe("") // do not use toBe
//           })
//     })


// })