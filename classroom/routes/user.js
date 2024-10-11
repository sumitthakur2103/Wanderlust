const express = require("express");
const router = express.Router();

//Index route
router.get("/", (req, res) => {
    res.send("GEt for users");
});


//show route
router.get("/:id", (req, res) => {
    res.send("GEt for show users");
});



//post route
router.post("/", (req, res) => {
    res.send("post for users");
});

//DELTE route
router.delete("/:id", (req, res) => {
    res.send("DELETE for users");
});

module.exports = router;