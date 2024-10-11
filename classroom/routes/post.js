//POST ROUTES

const express = require("express");
const router = express.Router();


//Index route
router.get("/", (req, res) => {
    res.send("GEt for posts");
});


//show route
router.get("/:id", (req, res) => {
    res.send("GEt for show posts");
});



//post route
router.post("/", (req, res) => {
    res.send("post for posts");
});

//DELTE route
router.delete("/:id", (req, res) => {
    res.send("DELETE for posts");
});

module.exports = router;
