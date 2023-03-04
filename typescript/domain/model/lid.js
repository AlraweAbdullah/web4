"use strict";
exports.__esModule = true;
exports.Lid = void 0;
var Lid = /** @class */ (function () {
    function Lid(lid) {
        this._id = lid.id;
        this.name = lid.name;
        this.street = lid.street;
        this.houseNr = lid.houseNr;
        this.postcode = lid.postcode;
        this.birthDate = lid.birthDate;
    }
    Lid.create = function (id, name, street, houseNr, postcode, birthDate) {
        return new Lid({ id: id, name: name, street: street, houseNr: houseNr, postcode: postcode,
            birthDate: birthDate });
    };
    Lid.prototype.getId = function () {
        return this._id;
    };
    return Lid;
}());
exports.Lid = Lid;
