const orm = require("../config/orm.js");

let burger = {
    select: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cb) {
        orm.insertOne("burgers", function (res) {
            cb(res);
        });
    },
    update: function (cb) {
        orm.updateOne("burgers", function (res) {
            cb(res);
        });
    },
};

module.exports = burger