const express = require("express");
const app = express();
const users = require("./routes/user");
const posts = require("./routes/post");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const sessionOption = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(session(sessionOption));
app.use(flash());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if (name === "anonymous") {
        req.flash("error", "user not registered");
    } else {
        req.flash("success", "user registered successfully");
    }
    res.redirect("/hello");
})

app.get("/abc", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
})
app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
})









// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// })



// app.get("/test", (req, res) => {
//     res.send("test successful");
// })


// const cookieParser = require("cookie-parser");


// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("made-in", "India", { signed: true });
//     res.send("signedCookie send");
// });


// app.get("/verify", (req, res) => { 
//     console.log("Signed cookie : ",req.signedCookies);
//     console.log("UNSigned cookie : ",req.cookies);

//     res.send("verified");
// });

// app.get("/getcookie", (req, res) => {
//     res.cookie("greet", "Hello");
//     res.cookie("madedIn", "India");
//     res.send("sent you some cookies");
// });


// app.get("/greet", (req, res) => {
//     let { name = "anonyms" } = req.cookies;
//     res.send(`Hi, ${name}`);
// })

// app.use("/users", users);
// app.use("/posts", posts);

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("HI I AM A ROOT");
// });

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
