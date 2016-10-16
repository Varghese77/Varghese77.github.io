// Logical symbols stored as strings
var notSymbol = "¬";
var andSymbol = "∧";
var orSymbol = "∨";
var xorSymbol = "⊕";
var implicationSymbol = "→";
var biconditionalSymbol = "↔";
var equivalenceSymbol = "≡";
var universalQuantifier = "∀";
var existentialQuantifier = "∃";

function onClick() {
    var input = document.getElementById("textInput");
    var rawText = input.value;
    
    rawText = rawText.replace(/{A}/g, universalQuantifier);
    rawText = rawText.replace(/{E}/g, existentialQuantifier);
    
    rawText = rawText.replace(/<->/g, biconditionalSymbol);
    rawText = rawText.replace(/->/g, implicationSymbol);
    rawText = rawText.replace(/:=/g, equivalenceSymbol);
    rawText = rawText.replace(/-/g, notSymbol);
    rawText = rawText.replace(/not /g, notSymbol);
    rawText = rawText.replace(/not/g, notSymbol);
    rawText = rawText.replace(/and/g, andSymbol);
    rawText = rawText.replace(/xor/g, xorSymbol)
    rawText = rawText.replace(/or/g, orSymbol);

    input.value = rawText;
}