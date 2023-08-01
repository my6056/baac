// const jwt = require("jsonwebtoken");

// // decode token

// module.exports = function (req, res, next) {
//      try {
//         const token = req.headers.Authorization.split(" ")[1];
//         const decoded = jwt.verify(token, process.env.jwt_secret);
//         req.body.userId = decoded.userId;
//         next();
//      } catch (error) {
//         res.send({
//            message: error.message,
//            success: false,
//         });
//      }
// }

// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {
//   try {
//     const token = req.headers.Authorization // Capital 'A' in Authorization
//     const decoded = jwt.verify(token, process.env.jwt_secret);
//     req.body.userId = decoded.userId;
//     next();
//   } catch (error) {
//     res.status(401).send({
//       message: error.message,
//       success: false,
//     });
//   }
// };
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization; // Changed 'Authorization' to lowercase 'authorization'
    const decoded = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decoded.userid;
    next();
  } catch (error) {
    res.status(401).send({
      message: error.message,
      success: false,
    });
  }
};
