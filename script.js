
var num1, num2, op = null;
var solved = false;

function equals() {
    var obj = document.getElementById("display");
    if(this.op == '+') {
        if(this.num2 == null) {
            this.num2 = this.num1;
        }
        var result = Number(this.num1)+Number(this.num2);
        obj.innerHTML = result;
    }
    if(this.op == '–') {
        if(this.num2 == null) {
            this.num2 = this.num1;
        }
        var result = Number(this.num1)-Number(this.num2);
        obj.innerHTML = result;
    }
    if(this.op == 'x') {
        if(this.num2 == null) {
            this.num2 = this.num1;
        }
        var result = Number(this.num1)*Number(this.num2);
        obj.innerHTML = result;
    }
    if(this.op == '/') {
        if(this.num2 == null) {
            this.num2 = this.num1;
        }
        var result = Number(this.num1)/Number(this.num2);
        obj.innerHTML = result;
    }
    if(this.op == '%') {
        if(this.num2 == null) {
            this.num2 = this.num1;
        }
        var result = Number(this.num1)%Number(this.num2);
        obj.innerHTML = result;
    }
    this.solved = true;
    document.getElementById(this.op).style.border = "";
}

function numberClicked(num) {
    if(this.solved == false) {
        if(this.op == null) {
            if(num1 == null) {
                this.num1 = num + "";
            }
            else {
                this.num1 += num;
            }
            document.getElementById("display").innerHTML = this.num1;
        }
        else {
            if(num2 == null) {
                this.num2 = num + "";
            }
            else {
                this.num2 += num;
            }
            document.getElementById("display").innerHTML = this.num2;
        }
    }
    else {
        this.num1 = num + "";
        this.num2 = null;
        this.op = null;
        this.solved = false;
        document.getElementById("display").innerHTML = this.num1;
    }
}

function opClicked(op) {
    if(this.solved == false) {
        if(this.op != null) {
            document.getElementById(this.op).style.border = "";
        }
    }
    else {
        this.num1 = document.getElementById("display").innerHTML;
        this.num2 = null;
        this.solved = false;
    }
    this.op = op;
    document.getElementById(op).style.border = "2px solid black";
}

function calcClear() {
    if(this.op != null) {
        document.getElementById(this.op).style.border = "";
    }
    this.num1 = null; 
    this.num2 = null; 
    this.op = null;
    document.getElementById("display").innerHTML = "0";
}

function signChange() {
    if(this.op == null) {
        if(this.num1 != 0) {
            this.num1 = 0 - this.num1;
        }
        document.getElementById("display").innerHTML = this.num1;
    }
    else {
        if(this.num2 != 0) {
            this.num2 = 0 - this.num2;
        }
        document.getElementById("display").innerHTML = this.num2;
    }
}

function decimalClicked() {
    if(this.op == null) {
        if(this.num1 == null) {
            this.num1 = 0 + ".";
        }
        else if(!(this.num1.includes("."))) {
            this.num1 += ".";
        }
        document.getElementById("display").innerHTML = this.num1;
    }
    else {
        if(this.num2 == null) {
            this.num2 = 0 + ".";
        }
        else if(!(this.num2.includes("."))) {
            this.num2 += ".";
        }
        document.getElementById("display").innerHTML = this.num2;
    }
}
