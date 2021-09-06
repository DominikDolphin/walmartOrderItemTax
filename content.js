const TAX = 1.13;
const ITEM_CLASS = "css-1kwp2ib e1wx779g13"
let items = document.getElementsByClassName(ITEM_CLASS)
let highlightOpen = "<mark><b>"
let highlightClose = "</b></mark>"

for (let i = 0; i < items.length; i++) {

    //get text from div
    let text = items[i].textContent;
    numbers = text.match(/\d+/g);

    let originalValue, newValue, roundUp;

    //Check if orignal price has a decimal.
    if (numbers.length == 3) {
        //If there is a decimal
        //Concat into a string, then convert to number;
        originalValue = numbers[1] + "." + numbers[2]
        originalValue = Number(originalValue); 
        //add tax to the value;
        newValue = originalValue * TAX;
        
    } else { 
        //If there is no decimal
        //Convert to number
        originalValue = Number(numbers[1]);
        //Add tax to the value
        newValue = originalValue * TAX;

        //If it is only in cents AND it's over a dollar: divide .
        if (text.includes("¢")) {
            //if it is greater than
            (newValue > 100) ? newValue /= 100 : inCents = true;
        }
    }

    //convert to only 2 decimal points
    newValue = newValue.toFixed(2);

    //Display
    items[i].innerHTML = `${text} -> ${highlightOpen}$${newValue}/ea${highlightClose}`
}