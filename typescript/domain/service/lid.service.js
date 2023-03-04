"use strict";
exports.__esModule = true;
var lid_db_1 = require("../data-access/lid.db");
var getAllLids = function () { return lid_db_1["default"].getAllLids(); };
exports["default"] = {
    getAllLids: getAllLids
};
