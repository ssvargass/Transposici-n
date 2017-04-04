"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TranspositionComponent = (function () {
    function TranspositionComponent() {
        this.mode = true;
        this.text = "";
        this.textClean = "";
        this.colums = 0;
        this.matrix = [[]];
        this.space = "*";
        this.keys = [];
        this.encrypted = "";
    }
    TranspositionComponent.prototype.encrypt = function () {
        this.matrix = [];
        this.textClean = this.text.replace(/ /g, '');
        this.colums = Math.ceil(Math.sqrt(this.textClean.length));
        this.getMatrix();
        this.getKey();
    };
    TranspositionComponent.prototype.getMatrix = function () {
        var tempArray = [];
        var counter = 0;
        for (var i = 0; i < this.colums; i++) {
            tempArray = [];
            for (var j = 0; j < this.colums; j++) {
                tempArray.push(this.getValue(counter));
                counter++;
            }
            this.matrix.push(tempArray);
        }
    };
    TranspositionComponent.prototype.getValue = function (counter) {
        if (this.textClean[counter]) {
            return this.textClean[counter];
        }
        else {
            return this.space;
        }
    };
    TranspositionComponent.prototype.getKey = function () {
        var a = [];
        for (var i = 0; i < this.colums; ++i) {
            a[i] = i;
        }
        this.keys = this.shuffle(a);
        this.getEncryptText();
    };
    TranspositionComponent.prototype.shuffle = function (array) {
        var tmp, current, top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array;
    };
    TranspositionComponent.prototype.getEncryptText = function () {
        if (this.mode) {
            this.encryptBytext();
        }
        else {
            this.encryptBytext(false);
        }
    };
    TranspositionComponent.prototype.encryptBytext = function (byColumn) {
        if (byColumn === void 0) { byColumn = true; }
        this.encrypted = "";
        for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var j = 0; j < this.colums; j++) {
                if (byColumn) {
                    this.encrypted += this.matrix[j][i];
                }
                else {
                    this.encrypted += this.matrix[i][j];
                }
            }
        }
    };
    return TranspositionComponent;
}());
TranspositionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'transposition',
        templateUrl: 'transposition.component.html',
    }),
    __metadata("design:paramtypes", [])
], TranspositionComponent);
exports.TranspositionComponent = TranspositionComponent;
//# sourceMappingURL=transposition.component.js.map