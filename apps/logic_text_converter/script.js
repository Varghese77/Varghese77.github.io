var textBox = new InputText();

function TextStack() {
    this.stack = [];
    
    this.pop = function() {
        if (this.stack.length != 0){
            return this.stack.pop();
        } else {
            return "";
        }
    };
    
    this.push = function(s){
        this.stack.push(s);
    };
    
    this.peek = function() {
        if (this.stack.length != 0){
            var text = this.pop();
            this.push(text);
            return text;
        } else {
            return "";
        }
        
    };
    
    this.size = function() {
        return this.stack.length;
    };
    
    this.clear = function() {
        if (this.stack.length !== 0){
            this.stack = [];
        }
    };
    
    this.size = function() {
        return this.stack.length;
    };
};

function InputText() {
    this.input; 
    this.backStack = new TextStack();
    this.fwdStack = new TextStack();
    
    this.add = function(s){
        if (s !== this.backStack.peek()) {
            this.backStack.push(s);
            this.fwdStack.clear();
        }
        console.log("back: " + this.backStack.size());
        console.log("FWD: " + this.fwdStack.size());
    };
    
    this.back = function() {
        var input = document.getElementById("textInput");
        this.add(input.value);
        if (this.backStack.size() !== 0){
            this.fwdStack.push(this.backStack.pop());
            input.value = this.backStack.peek();
        }
        console.log("back: " + this.backStack.size());
        console.log("FWD: " + this.fwdStack.size());
    };
    
    this.forward = function() {
        var input = document.getElementById("textInput");
        if (this.fwdStack.size() !== 0){
            var fwdText = this.fwdStack.pop();
            this.backStack.push(fwdText);
            input.value = fwdText;
        }
        console.log("back: " + this.backStack.size());
        console.log("FWD: " + this.fwdStack.size());
    };
    
    this.convert = function() {
        /* Logical symbols stored as strings
            var notSymbol = "¬";
            var andSymbol = "∧";
            var orSymbol = "∨";
            var xorSymbol = "⊕";
            var implicationSymbol = "→";
            var biconditionalSymbol = "↔";
            var equivalenceSymbol = "≡";
            var universalQuantifier = "∀";
            var existentialQuantifier = "∃";
        */
        var input = document.getElementById("textInput");
        var rawText = input.value;
        this.add(rawText);

        // Quantifiers
        rawText = rawText.replace(/{A}/g, "∀");
        rawText = rawText.replace(/{E}/g, "∃");

        // Set Logic Symbols
        rawText = rawText.replace(/{U}/g, "∪");
        rawText = rawText.replace(/{u}/g, "∩");
        rawText = rawText.replace(/{u>}/g, "⊂");
        rawText = rawText.replace(/{ue}/g, "∈");
        rawText = rawText.replace(/{u=}/g, "⊆");

        // Propositinal Logic Symbols
        rawText = rawText.replace(/<_>/g, "↔");
        rawText = rawText.replace(/->/g, "→");
        rawText = rawText.replace(/:=/g, "≡");
        rawText = rawText.replace(/not /g, "¬");
        rawText = rawText.replace(/not/g, "¬");
        rawText = rawText.replace(/and/g, "∧");
        rawText = rawText.replace(/xor/g, "⊕")
        rawText = rawText.replace(/or/g, "∨");

        // Put back characters to remain non-changed. 
        rawText = rawText.replace(/\\∨/g, "\\or");
        rawText = rawText.replace(/\\¬/g, "\\not ");
        rawText = rawText.replace(/\\∧/g, "\\and");
        rawText = rawText.replace(/\\⊕/g, "\\xor");

        input.value = rawText;
        this.add(rawText);
    };
    
    this.removeSlashes = function() {
        var input = document.getElementById("textInput");
        var rawText = input.value;
        this.add(rawText);
        
        rawText = rawText.replace(/\\or/g, "or");
        rawText = rawText.replace(/\\not /g, "not ");
        rawText = rawText.replace(/\\and/g, "and");
        rawText = rawText.replace(/\\xor/g, "xor");
        input.value = rawText;
        this.add(rawText)
    };
};


document.addEventListener("keydown", function(evt) {
    if (evt.keyCode==90 && (evt.ctrlKey)){
        evt.preventDefault();
        textBox.back();
    } else if (evt.keyCode==89 && (evt.ctrlKey)) {
        evt.preventDefault();
        textBox.forward();
    } else if (evt.keyCode==84 && (evt.altKey)) {
        evt.preventDefault();
        textBox.convert();
    }
});

function convert() { 
    textBox.convert();
}

function removeSlashes() {
    textBox.removeSlashes();
}
