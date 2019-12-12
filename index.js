const mongo = require('mongodb').MongoClient;
const express = require('express');
const app = express();

// ======================================
//              Middleware
// ======================================
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

// middleware to handle post request
app.use(express.urlencoded({extended: false}));

// View engine middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/ejs"));

// ======================================
//              Routes
// ======================================
app.get("/", async (req, res) =>{
    res.render("pages/index", {title : "Homepage"}); // renders the page
});

//
// Route create a meal
//
app.get("/create", async (req, res) =>{
    res.render("pages/create", {title : "Lägg till maträtt"}); // renders the page

    
});
app.post("/create", async (req, res) => {
        
    try {
        await app.mealsCol.insertOne(req.body);
        res.redirect("/");

    } catch (error) {
        res.send("no meal is created");
    }

});

//
// Route delete a meal
//
app.get("/delete", async (req, res) =>{
    res.render("pages/delete", {title : "ta bort en maträtt"}); // renders the page
    
});


//
// Route update a meal
//
app.get("/update", async (req, res) =>{
    res.render("pages/update", {title : "uppdatera din maträtt"}); // renders the page
});

app.listen(5000, () => console.log("Listening on port 5000...")); 