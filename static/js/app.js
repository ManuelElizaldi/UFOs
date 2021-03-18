// import the data from data.js
// const used for tableData because we don't want to reassig or reuse the variable
const tableData = data;

//D3 is a javascript library used for dynamic graphics in an HTML webpage
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // start by clearing data off the table
    tbody.html("");

// data -> an object that references the data being imported
// foreach -> keyword to create a for loop in js
// dataRow -> a parameter that will be used as a value when the function is called
data.forEach((dataRow) => {
    // this code will create a variable that will append a row to the table body. var is for global variables
    // this code will tell js to find the tag tbody in the html and add a table row 'tr'
    let row = tbody.append("tr");
    // Object.values -> references the array
    // (dataRow) -> as an argument we are saying that we want the values to go into the dataRow
    // forEach((val)) because we need to specify that we want one object per row, val will cover all data types
    Object.values(dataRow).forEach((val) => {
    // appending data to table
        let cell = row.append("td");
    // with the following code we will extract the text from the row
        cell.text(val);
        }
    );
});
}