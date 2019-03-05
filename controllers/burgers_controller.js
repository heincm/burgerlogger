const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name"], [req.body.burger_name], function (result) {
        // Send back the ID of the new quote
        res.redirect('/');
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    burger.update(
        {
            devoured: true
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.redirect('/');
        }
    );
});

// Export routes for server.js to use.
module.exports = router;