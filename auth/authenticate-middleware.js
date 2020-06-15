const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secret')
module.exports = (req, res, next) => {
	const { authorization } = req.headers
	authorization
		? jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
				err ? res.status(401).json({ error: 'Not Authorized Invalid Creds' }) : (req.decodedToken = decodedToken)
				next()
		  })
		: res.status(400).json({ error: 'Please provide a username and password' })
}

// const jwt = require('jsonwebtoken')
// const { jwtSecret } = require('../config/secret.js')

// module.exports = (req, res, next) => {
//   const token = req.headers.authorization
//   if (token) {
//     jwt.verify(token, jwtSecret,(error, decodedToken) =>{
//       if (error){
//         console.log(error)
//         res.status(401).json({ you: 'shall not pass!' })
//       } else {
//         req.decodedToken = decodedToken
//         next()
//       }
//     })
//   } else {
//     res.status(500).json({message: 'You are not logged in, please try logging in'})
//   }
// };
