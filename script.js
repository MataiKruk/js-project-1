let budget = document.querySelector("#budgetInput");
let budgetSet;

//disable buttons to begin with
document.getElementById("btnEntertainment").disabled = true;
document.getElementById("btnFood").disabled = true;
document.getElementById("btnClothing").disabled = true;
document.getElementById("btnBills").disabled = true;


//hide everything EXCEPT entertainment
document.querySelector("#btnEntertainment").addEventListener('click', () => {
    document.querySelector("#entertainment").style.display = 'block';

    document.querySelector("#food").style.display = 'none';
    document.querySelector("#clothing").style.display = 'none';
    document.querySelector("#bills").style.display = 'none';
    document.getElementById("clown-face").style.display = 'none';
});

//hide everything EXCEPT food
 document.querySelector("#btnFood").addEventListener('click', () => {
    document.querySelector("#food").style.display = 'block';

    document.querySelector("#entertainment").style.display = 'none';
    document.querySelector("#clothing").style.display = 'none';
    document.querySelector("#bills").style.display = 'none';
    document.getElementById("clown-face").style.display = 'none';
 });

 //hide everything EXCEPT clothing
 document.querySelector("#btnClothing").addEventListener('click', () => {
    document.querySelector("#clothing").style.display = 'block';
   
    document.querySelector("#food").style.display = 'none';
    document.querySelector("#entertainment").style.display = 'none';
    document.querySelector("#bills").style.display = 'none';
    document.getElementById("clown-face").style.display = 'none';
 });

 //hide everything EXCEPT bills
 document.querySelector("#btnBills").addEventListener('click', () => {
    document.querySelector("#bills").style.display = 'block';
    
    document.querySelector("#food").style.display = 'none';
    document.querySelector("#clothing").style.display = 'none';
    document.querySelector("#entertainment").style.display = 'none';
    document.getElementById("clown-face").style.display = 'none';
 });

 //grab total budget, create seperate variable that we can adjust with each transaction
 document.querySelector("#budget-form").addEventListener("submit", (e) => {
    e.preventDefault();
    budgetSet = parseInt(budget.value);
    if (isNaN(parseFloat(budget.value)) || budgetSet <= 0) {
       displayErrorMessage("Please enter a valid input.");
       return;
   }
    console.log(budgetSet);

   //displays final total of transactions
   document.getElementById("budget-total").innerText=`My Budget is $${parseInt(budget.value)}`;
   document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
   document.getElementById("budget-form").style.display = 'none';
   document.getElementById("filler-img").style.display = 'none';
   document.getElementById("clown-face").style.display = 'block';
   document.getElementById("btnEntertainment").disabled = false;
document.getElementById("btnFood").disabled = false;
document.getElementById("btnClothing").disabled = false;
document.getElementById("btnBills").disabled = false;
});

function displayErrorMessage(message) {
   const errorMessageContainer = document.getElementById("error-message-container");
   
   // Create a new div element for the error message
   const errorMessage = document.createElement("div");
   errorMessage.textContent = message;

   // Append the error message to the container
   errorMessageContainer.appendChild(errorMessage);

   //create a div with the image of Pennywise
   const pennywiseMessage = document.createElement("IMG");
   pennywiseMessage.src = "images/pennywise-image-2.png";
//    pennywiseMessage.setAttribute("width", "500");
//    pennywiseMessage.setAttribute("height", "300");
   pennywiseMessage.setAttribute("alt", "Pennywise");
   pennywiseMessage.classList.add("pennywisePic");
   errorMessageContainer.appendChild(pennywiseMessage);

   // Automatically remove the error message after a few seconds (optional)
   setTimeout(() => {
       errorMessageContainer.removeChild(pennywiseMessage)
       errorMessageContainer.removeChild(errorMessage);
   }, 2000); // Remove the error message after 3 seconds
}

let entertainmentTotal = 0;
document.querySelector("#entertainment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const entertainmentName = document.getElementById("entertainment-name").value;
    const entertainmentCost = document.getElementById("entertainment-cost").value;

    if (entertainmentName.trim() === '' || isNaN(parseFloat(entertainmentCost)) || entertainmentCost <= 0 ) {
      displayErrorMessage("Please fill out both fields with valid values.");
      return;
  }
    
    //finds total of transactions
    const parsedEntertainmentCost = parseFloat(entertainmentCost);
    entertainmentTotal += parsedEntertainmentCost;
    budgetSet -= parsedEntertainmentCost;

    //lists all the transcaction names and costs
    const newEntertainmentList = document.createElement("LI");
    newEntertainmentList.textContent=`Transaction Name: ${entertainmentName}, Transaction Cost: $${entertainmentCost}`;
    const entertainmentListContainer = document.getElementById("entertainment-list-container");
    entertainmentListContainer.appendChild(newEntertainmentList);

    //displays final total of transactions 
    const finalEntertainmentTotal = document.getElementById("entertainment-total-end");
    finalEntertainmentTotal.innerText = `Total Spent: $${entertainmentTotal}`;

    document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
    console.log(entertainmentName, parsedEntertainmentCost, entertainmentTotal);
    console.log("working");
    console.log(budgetSet);
    checkBudget();
});

let foodTotal = 0;
document.querySelector("#food-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const foodName = document.getElementById("food-name").value;
    const foodCost = document.getElementById("food-cost").value;
    
   if (foodName.trim() === '' || isNaN(parseFloat(foodCost)) || foodCost <= 0 ) {
      displayErrorMessage("Please fill out both fields with valid values.");
      return;
  }

    //finds total of transactions
    const parsedFoodCost = parseFloat(foodCost);
    foodTotal += parsedFoodCost;
    budgetSet -= parsedFoodCost;

    //lists all the transcaction names and costs
    const newFoodList = document.createElement("LI");
    newFoodList.textContent=`Transaction Name: ${foodName}, Transaction Cost: $${foodCost}`;
    const foodListContainer = document.getElementById("food-list-container");
    foodListContainer.appendChild(newFoodList);

    //displays final total of transactions 
    const finalFoodTotal = document.getElementById("food-total-end");
    finalFoodTotal.innerText = `Total Spent: $${foodTotal}`;

    document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
    console.log(foodName, parsedFoodCost, foodTotal);
    console.log("working");
    console.log(budgetSet);
    checkBudget();
});

let clothingTotal = 0;
document.querySelector("#clothing-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const clothingName = document.getElementById("clothing-name").value;
    const clothingCost = document.getElementById("clothing-cost").value;
    
    if (clothingName.trim() === '' || isNaN(parseFloat(clothingCost)) || clothingCost <= 0 ) {
      displayErrorMessage("Please fill out both fields with valid values.");
      return;
  }
    //finds total of transactions
    const parsedClothingCost = parseFloat(clothingCost);
    clothingTotal += parsedClothingCost;
    budgetSet -= parsedClothingCost;

    //lists all the transcaction names and costs
    const newClothingList = document.createElement("LI");
    newClothingList.textContent=`Transaction Name: ${clothingName}, Transaction Cost: $${clothingCost}`;
    const clothingListContainer = document.getElementById("clothing-list-container");
    clothingListContainer.appendChild(newClothingList);

    //displays final total of transactions 
    const finalClothingTotal = document.getElementById("clothing-total-end");
    finalClothingTotal.innerText = `Total Spent: $${clothingTotal}`;

    document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
    console.log(clothingName, parsedClothingCost, clothingTotal);
    console.log("working");
    console.log(budgetSet);
    checkBudget();
});

let billsTotal = 0;
document.querySelector("#bills-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const billsName = document.getElementById("bills-name").value;
    const billsCost = document.getElementById("bills-cost").value;

    if (billsName.trim() === '' || isNaN(parseFloat(billsCost)) || billsCost <= 0 ) {
      displayErrorMessage("Please fill out both fields with valid values.");
      return;
  }
    //finds total of transactions
    const parsedBillsCost = parseFloat(billsCost);
    billsTotal += parsedBillsCost;
    budgetSet -= parsedBillsCost;

    //lists all the transcaction names and costs
    const newBillsList = document.createElement("LI");
    newBillsList.innerText=`Transaction Name: ${billsName}, Transaction Cost: $${billsCost}`;
    const billsListContainer = document.getElementById("bills-list-container");
    billsListContainer.appendChild(newBillsList);

    //displays final total of transactions 
    const finalBillsTotal = document.getElementById("bills-total-end");
    finalBillsTotal.innerText = `Total Spent: $${billsTotal}`;

    document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
    console.log(billsName, parsedBillsCost, billsTotal);
    console.log("working");
    console.log(budgetSet);
    checkBudget();
});



// Check if the budget is consumed within the week
function checkBudget() {
    // Replace this with your logic to determine if the budget is consumed
    // For example, you might compare the current date with the end of the week
    const isBudgetConsumed20 = budgetSet <= (budget.value*0.2); // Adjust this based on your logic
    const isBudgetConsumed = budgetSet <= 0;
    // Display the budget monitor box if the budget is consumed
    if (isBudgetConsumed20) {
        document.getElementById('budget-monitor-20').style.display = 'block';
    }

    if (isBudgetConsumed) {
        document.getElementById('budget-monitor-20').style.display = 'none';
        document.getElementById('budget-monitor').style.display = 'block';

        document.getElementById('buttonE').disabled = true;
        document.getElementById('buttonF').disabled = true;
        document.getElementById('buttonC').disabled = true;
        document.getElementById('buttonB').disabled = true;
    }

  }
  
  // Call the checkBudget function when the page loads
  window.onload = checkBudget;
  
