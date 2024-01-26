const jwt = require("jsonwebtoken");

const value = {
  name: "zaid",
  accountNumber: 12323233,
};

const token = jwt.sign(value, "generate");

console.log(token);
// value -> token
// try { -> to not give the node made error
    
// } catch (error) {
    
// }

