// import the data from data.js
// const used for tableData because we don't want to reassig or reuse the variable
const tableData = data;

//D3 is a javascript library used for dynamic graphics in an HTML webpage
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// the code above declares a variable and then uses the d3.select to tell js to look for the <tbody> tags in the HTML

// Simple js console.log statemnet
function printHello() {
    console.log("Hello There ! ");
};

function addition (a,b) {
    return a+b;
};

// to call the previous function - two parameter per function
console.log(addition(4,5));
// or
addition(4,5);

// Functions can call other functions
function doubleAddition(c,b) {
    var total = addition(c,b) * 2;
    return total;
}

// Arrow functions are iniciated with a fat arrow =>
// example addition:
addition = (a,b) => a+b;

//double addition
doubleAddition = (c,d) => addition(c,d) * 2

// for loops in JS
