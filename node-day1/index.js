const fs = require("fs");

//console.log(fs);

const textIn = fs.readFileSync('./txt/input.txt','utf-8');

//console.log(textIn);

const textOut = `${textIn} and passing it to output text file` ;

fs.writeFileSync('./txt/output.txt',textOut);

console.log("file written");

// const x1 = "node first class";

// console.log(x1);