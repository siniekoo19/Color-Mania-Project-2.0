const express = require("express");
const mysql = require('mysql2');
const path = require("path");
const methodOverride = require('method-override');

const app = express();

const port = 8080;

app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Database connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'game', // Enter your database name
    password : '@Luvchai5JK#' // Enter your mysql password
}); 

// Home Route 
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;

    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['count(*)'];

            if( count > 5){
                let q1 = `SELECT * FROM user ORDER BY highest_score DESC LIMIT 5`;
                connection.query(q1, (err, users) =>{
                    if (err) throw err;
                    res.render("home.ejs", {users});
                })
            } else {
                let q1 = `SELECT * FROM user ORDER BY highest_score DESC`;
                connection.query(q1, (err, users) =>{
                    if (err) throw err;
                    res.render("home.ejs", {users});
                })
            }
        });
    } catch(err) {
        console.log(err);
        res.send("Error in DB");
    }
});

// Login Route
app.get("/user/login", (req, res) => {
    res.render("login.ejs");
})

app.post("/user/game", (req, res) => {
    let {email, password} = req.body;

    let q = `SELECT * FROM user WHERE email = '${email}'`;

    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(email == user.email && password == user.password){
                res.render("index.ejs", {user});
            } else {
                res.redirect("/user/signup");
            }
        });
    } catch(err){
        console.log(err);
        res.send(`<h1>Error in DB</h1>`);
    }
});
 
// SignUp Route
app.get("/user/signup", (req, res) => {
    res.render("signup.ejs");
})

app.post("/", (req, res) => {
    let {email, password} = req.body;

    let q = `INSERT INTO user (email, password) VALUES ?`;

    let newUser = [[email, password]];
    console.log(newUser);

    try{
        connection.query(q, [newUser], (err, result) => {
            if (err) throw err;
            res.redirect("/");
        });
    } catch(err) {
        console.log(err);
        res.send("Error in DB");
    }
});

// Route to update the highest score of a user
app.post('/update_score', (req, res) => {
    const { email, currentScore } = req.body;
    
    let q = `SELECT highest_score FROM user WHERE email = ?`;

    try{
        connection.query(q, [email], (err, result) => {
            if (err) throw err;
            let highestScore = result[0]['highest_score'];
            if(currentScore > highestScore){
                let q2 = `UPDATE user SET highest_score = ${currentScore} WHERE email = '${email}'`;

                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user/game");
                })
            } else {
                res.redirect("/user/game");
            }
        })
    } catch(err) {
        console.log("Error in DB");
    }
});

// Update password Route
app.get("/user/changepassword", (req, res) => {
    res.render("forgetpassword.ejs");
});

app.patch('/user/changepassword', (req, res) => {
    const { email, password, confirmpass} = req.body;
    
    // console.log({ email, password, confirmpass});

    let q = `SELECT * FROM user WHERE email = '${email}'`;

    try{
        connection.query(q, (err, result) => {
            // console.log(result[0]);
            if (err) throw err;
            
            if (result[0] == undefined)  {
                res.send(`<h1 style="text-align: center;">User Not Found<h1>`);
            } else if (result[0]['email'] == email){
                if (password == confirmpass){
                    let q2 = `UPDATE user SET password = ${password} WHERE email = '${email}'`;
    
                    connection.query(q2, (err, result) => {
                        res.redirect("/user/login");
                    });
                } else {
                    res.render("error.ejs");
                }
            } 
        });
    } catch(err){
        console.log(err);
        res.send("error");
    }
});

app.listen(port, () =>{
    console.log(`Listing at post ${port}`);
});
