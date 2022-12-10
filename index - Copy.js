//import express 
const express = require("express");
//import path Model
const path = require("path"); 
const server = express();

//Add a Middelwaare
server.use(express.static(path.join(__dirname, "public")));

// //middleware definitions
//     const serveHomepage = (req, res) => {
//    // res.send("<h1>Welcome to Home Page</h1>")
//     // find the file 
//     const homepageFilePath = path.join(__dirname, "public","index.html");
//     //send the file to client
//     res.sendfile(homepageFilePath);
// }
//     const profilepage = (req, res) => {
//     // res.send("<h1>Welcome to Home Page</h1>")
//     // find the file 
//     const profilepagepath = path.join(__dirname, "public","profile.html");
//     //send the file to client
//     res.sendfile(profilepagepath);
//  }
    const Aboutpage = (req, res) => {
    // find the file 
    const aboutpagepath = path.join(__dirname, "public","about.html");
    //send the file to client
    res.sendfile(aboutpagepath);
 }
 const contactpage = (req, res) => {
    // find the file 
    const contactpagepath = path.join(__dirname, "public","contact.html");
    //send the file to client
    res.sendfile(contactpagepath);
 }
 const servicespage = (req, res) => {
    // find the file 
    const servicespagepath = path.join(__dirname, "public","services.html");
    //send the file to client
    res.sendfile(servicespagepath);
 }
 const blogpage = (req, res) => {
    // find the file 
    const blogpagepath = path.join(__dirname, "public","blog.html");
    //send the file to client
    res.sendfile(blogpagepath);
 }
const loginRequsthandler = (req, res) => {
    // console.log(req)
    // let body = "";
    // req.on("data", chunk => {
    //     body += chunk;
    // });
    // req.on("end",() => {
    //     //Pass data with regbxp
    //     console.log(body);
    // })
    res.send("Login suscessfuly")
}

//Route definition
// server.get("/", serveHomepage);
server.get("/about", Aboutpage);
server.get("/contact", contactpage);
server.get("/services", servicespage);
server.get("/blog", blogpage);

//USING POSTMAN FOR TEST
server.post("/Login",loginRequsthandler)

server.listen(3000,() => console.log("servee is redy"));