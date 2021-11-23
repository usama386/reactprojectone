// const myname="my name is usama and i m learning node js";
// module.exports = myname;

// ******************* There are two types of modules 1: file based module 2: build in modules 3: Third party module
// ******************* Build in modules

// const fs = require('fs');
// fs.readFile('./sample.txt', 'utf-8' , (err,data)=>{
//     if(err){
//         return err;
//     }
//     console.log(data);
// });


// const d = {
//     avg : (a,b) => {
//         console.log(a+b/2);
//     }
// }
// module.exports=d;

// const fs=require("fs");
// const a = fs.readFileSync("./sample.txt" , "utf-8");
// console.log(a);
// console.log("my first code");
// const fs=require("fs");
// const a="we are setup new file in the folder";
// fs.writeFile("./sample.txt",a, () => {
//     console.log("this is our text");
// });

// const os =require("os");
// const a =os.totalmem();
// console.log(a);

// const hye= require("pokemon");

// const a =hye.random();
// console.log(a);


// We are now creating server
const http = require("http");
const fs=require("fs");
const PORT = process.env.PORT;
const home=fs.readFileSync("./index.html","utf-8");


const server = http.createServer((req, res) => {
//     console.log(req.url);
//   res.end("serve is working");
if(req.url === "/"){
    return res.end(home);
}
    if(req.url==="/about"){
        return res.end("<h1>This is about us page content</h1>");
    }
    if(req.url==="/contact"){
        return res.end("<h1>This is contact us page content</h1>");
    }
});
server.listen(PORT, () => {
  console.log(`serve is runnig on this server `);
}); 

