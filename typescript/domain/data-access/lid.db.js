"use strict";
exports.__esModule = true;
var lid_1 = require("../model/lid");
var currentId = 1;
var lids = [
    lid_1.Lid.create(currentId++, "Abdullah", "fonteinstraat", "4B", 3000, new Date(1991, 9, 12)),
    lid_1.Lid.create(currentId++, "Abdullah2", "fonteinstraat2", "4A", 3000, new Date(1991, 9, 12))
];
var getAllLids = function () {
    return lids;
};
var getLidById = function (_a) {
    var id = _a.id;
    for (var i = 0; i < lids.length; i++) {
        if (lids[i].getId() == id) {
            return lids[i];
        }
    }
    return null;
};
exports["default"] = {
    getAllLids: getAllLids,
    getLidById: getLidById
};
