var num1 = 2; //global Variable
var Calculation = /** @class */ (function () {
    function Calculation() {
    }
    Calculation.prototype.add = function () {
        var num2 = 1; //local variable
        var addition = 0;
        addition = num1 + num2;
        console.log(addition);
    };
    Calculation.prototype.sub = function () {
        var num2 = 1; //local variable
        var subtract = 0;
        subtract = num1 - num2;
        console.log(subtract);
    };
    Calculation.prototype.mult = function () {
        var num2 = 1; //local variable
        var multiply = 0;
        multiply = num1 * num2;
        console.log(multiply);
    };
    Calculation.prototype.div = function () {
        var num2 = 1; //local variable
        var divide = 0;
        divide = num1 / num2;
        console.log(divide);
    };
    return Calculation;
}());
var obj = new Calculation();
obj.add();
var obj = new Calculation();
obj.sub();
var obj = new Calculation();
obj.mult();
var obj = new Calculation();
obj.div();
