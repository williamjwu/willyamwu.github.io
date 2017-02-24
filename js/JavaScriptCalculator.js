//Copyright © 2016 William Ng. All rights reserve

var canvas = document.getElementById("canvas");
    var processing = new Processing(canvas, function(processing) {
        processing.size(400, 400);
        processing.background(0xFFF);

        var mouseIsPressed = false;
        processing.mousePressed = function () { mouseIsPressed = true; };
        processing.mouseReleased = function () { mouseIsPressed = false; };

        var keyIsPressed = false;
        processing.keyPressed = function () { keyIsPressed = true; };
        processing.keyReleased = function () { keyIsPressed = false; };
        
        with (processing) {
            //------Constructors below------//
            //numeric button constructors
            var btnX = 105;  //variable to change X axis
            var btnY = 105;  //variable to change Y axis
            var displayValue = "";
            var currentValue = 0;  //contains the first series of number
            var getOperator = "";
            var drawDisplay = function(){
            //draw the display part of the calculator
            noStroke();
            fill(37, 142, 217);
            rect(btnX - 70, btnY - 70, 330, 50, 5);
            fill(255, 255, 255);
            textSize(35); 
            };

            var Button = function(config) {
                this.x = config.x || 0;
                this.y = config.y || 0;
                this.width = config.width || 50;
                this.height = config.height || 50;
                this.label = config.label || "Click";
                this.bgColorR = config.bgColorR || 222;
                this.bgColorG = config.bgColorG || 222;
                this.bgColorB = config.bgColorB || 222;
                this.fontColorR = config.fontColorR || 37;
                this.fontColorG = config.fontColorG || 142;
                this.fontColorB = config.fontColorB || 217;
                this.onClick = config.onClick || function() {};
            };

            Button.prototype.draw = function() {
                noStroke();
                fill(this.bgColorR, this.bgColorG, this.bgColorB);
                rect(this.x, this.y, this.width, this.height, 5);
                fill(this.fontColorR, this.fontColorG, this.fontColorB);
                textSize(19);
                textAlign(LEFT, TOP);
                text(this.label, this.x+20, this.y+this.height/4);
            };

            Button.prototype.isMouseInside = function() {
                return mouseX > this.x &&
                mouseX < (this.x + this.width) &&
                mouseY > this.y &&
                mouseY < (this.y + this.height);
            };

            Button.prototype.handleMouseClick = function() {
                if (this.isMouseInside()) {
                this.onClick();
            }
        };

        //------Objects below------
        //numeric button objects
        var numPi = new Button({
            x: btnX - 70,
            y: btnY,
            label: "π",
            onClick: function() {
                textAlign(RIGHT, TOP);
                displayValue = "";
                displayValue = displayValue+"3.14159";
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
            }
        });
        var num7 = new Button({
            x: btnX,
            y: btnY,
            label: 7,
            onClick: function() {
                textAlign(RIGHT, TOP);
                displayValue = displayValue+"7";
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
            }
        });
        var num8 = new Button({
            x: btnX + 70,
            y: btnY,
            label: "8",
            onClick: function() {
                textAlign(RIGHT, TOP);
                displayValue = displayValue+"8";
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
            }
        });
        var num9 = new Button({
            x: btnX + 140,
            y: btnY,
            label: "9",
            onClick: function() {
                textAlign(RIGHT, TOP);
                displayValue = displayValue+"9";
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
            }
        });
        var btnSquare = new Button({
            x: btnX - 70,
            y: btnY + 70,
            label: "x²",
            onClick: function() {
                textAlign(RIGHT, TOP);
                displayValue = displayValue * displayValue;
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
            }
        });
var num4 = new Button({
    x: btnX,
    y: btnY + 70,
    label: "4",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = displayValue+"4";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
var num5 = new Button({
    x: btnX + 70,
    y: btnY + 70,
    label: "5",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = displayValue+"5";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
var num6 = new Button({
    x: btnX + 140,
    y: btnY + 70,
    label: "6",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = displayValue+"6";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
var btnSqrt = new Button({
    x: btnX - 70,
    y: btnY + 140,
    label: "√",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = sqrt(displayValue);
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
var num1 = new Button({
    x: btnX,
    y: btnY + 140,
    label: "1",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = displayValue+"1";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
var num2 = new Button({
    x: btnX + 70,
    y: btnY + 140,
    label: "2",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = displayValue+"2";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
var num3 = new Button({
    x: btnX + 140,
    y: btnY + 140,
    label: "3",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = displayValue+"3";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
var numDot = new Button({
    x: btnX - 70,
    y: btnY + 210,
    label: ".",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = displayValue+".";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
var clearBtn = new Button({
    x: btnX,
    y: btnY + 210,
    label: "C",
    onClick: function() {
        displayValue = "0";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
        displayValue = "";
        getOperator = "";
    }
});
var num0 = new Button({
    x: btnX + 70,
    y: btnY + 210,
    label: "0",
    onClick: function() {
        textAlign(RIGHT, TOP);
        displayValue = displayValue+"0";
        drawDisplay();
        text(displayValue, btnX + 255, btnY - 67);
    }
});
//functional button objects
var equalBtn = new Button({
    x: btnX + 140,
    y: btnY + 210,
    label: "=",
    bgColorR: 255,
    bgColorG: 140,
    bgColorB: 20,
    fontColorR: 255,
    fontColorG: 255,
    fontColorB: 255,
        onClick: function() {
        if (displayValue === ""){
            displayValue = currentValue;
            getOperator = "";
        }
        else {
            if (getOperator === "+") {
                displayValue = Number(currentValue) + Number(displayValue);
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
                getOperator = "";
            }
            else if(getOperator === "-") {
                displayValue = Number(currentValue) - Number(displayValue);
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
                getOperator = "";
            }
            else if(getOperator === "*") {
                displayValue = Number(currentValue) * Number(displayValue);
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
                getOperator = "";
            }
            else if(getOperator === "/") {
                if (displayValue === "0") {
                    displayValue = "Error";
                    drawDisplay();
                    text(displayValue, btnX + 255, btnY - 67);
                    displayValue = "";
                    getOperator = "";
                }
                else {
                displayValue = Number(currentValue) / Number(displayValue);
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
                getOperator = "";
                }
            }
            else {
                displayValue = "Error";
                drawDisplay();
                text(displayValue, btnX + 255, btnY - 67);
                displayValue = "";
                getOperator = "";
            
            }
        }
        
    }
});

var additionBtn = new Button({
    x: btnX + 210,
    y: btnY,
    label: "+",
    bgColorR: 255,
    bgColorG: 140,
    bgColorB: 20,
    fontColorR: 255,
    fontColorG: 255,
    fontColorB: 255,
    onClick: function() {
        getOperator = "+";
        currentValue = displayValue;
        displayValue = "";
        drawDisplay();
    }
});
var subtractionBtn = new Button({
    x: btnX + 210,
    y: btnY + 70,
    label: "-",
    bgColorR: 255,
    bgColorG: 140,
    bgColorB: 20,
    fontColorR: 255,
    fontColorG: 255,
    fontColorB: 255,
    onClick: function() {
        getOperator = "-";
        currentValue = displayValue;
        displayValue = "";
        drawDisplay();
    }
});
var multiplicationBtn = new Button({
    x: btnX + 210,
    y: btnY + 140,
    label: "x",
    bgColorR: 255,
    bgColorG: 140,
    bgColorB: 20,
    fontColorR: 255,
    fontColorG: 255,
    fontColorB: 255,
    onClick: function() {
        getOperator = "*";
        currentValue = displayValue;
        displayValue = "";
        drawDisplay();
    }
});
var divisionBtn = new Button({
    x: btnX + 210,
    y: btnY + 210,
    label: "÷",
    bgColorR: 255,
    bgColorG: 140,
    bgColorB: 20,
    fontColorR: 255,
    fontColorG: 255,
    fontColorB: 255,
    onClick: function() {
        getOperator = "/";
        currentValue = displayValue;
        displayValue = "";
        drawDisplay();
    }
});

mouseClicked = function() {
    numPi.handleMouseClick();
    num7.handleMouseClick();
    num8.handleMouseClick();
    num9.handleMouseClick();
    btnSquare.handleMouseClick();
    num4.handleMouseClick();
    num5.handleMouseClick();
    num6.handleMouseClick();
    btnSqrt.handleMouseClick();
    num1.handleMouseClick();
    num2.handleMouseClick();
    num3.handleMouseClick();
    num0.handleMouseClick();
    numDot.handleMouseClick();
    clearBtn.handleMouseClick();
    equalBtn.handleMouseClick();
    additionBtn.handleMouseClick();
    subtractionBtn.handleMouseClick();
    multiplicationBtn.handleMouseClick();
    divisionBtn.handleMouseClick();
};
//function called below
numPi.draw();
btnSquare.draw();
num7.draw();
num8.draw();
num9.draw();
num4.draw();
num5.draw();
num6.draw();
btnSqrt.draw();
num1.draw();
num2.draw();
num3.draw();
num0.draw();
numDot.draw();
clearBtn.draw();
equalBtn.draw();
additionBtn.draw();
subtractionBtn.draw();
multiplicationBtn.draw();
divisionBtn.draw();
drawDisplay();
}
if (typeof draw !== 'undefined') processing.draw = draw;
    });