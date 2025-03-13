const crypto = require("crypto");

// Generate a random JWT secret
const jwtSecret = crypto.randomBytes(32).toString('hex');

console.log("Random JWT_SECRET:", jwtSecret);

// Generate a random key for AES-256-CBC
const key = crypto.randomBytes(32).toString('hex');

console.log("Random KEY:", key); // Print the key in hexadecimal format

// Generate a random IV
const iv = crypto.randomBytes(16).toString('hex');

console.log("Random IV:", iv);
