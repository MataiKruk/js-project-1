let budget = document.querySelector("#budgetInput");
let budgetSet;

//hide everything EXCEPT entertainment
document.querySelector("#btnEntertainment").addEventListener('click', () => {
    document.querySelector("#entertainment").style.display = 'block';

    document.querySelector("#food").style.display = 'none';
    document.querySelector("#clothing").style.display = 'none';
    document.querySelector("#bills").style.display = 'none';
});

//hide everything EXCEPT food
 document.querySelector("#btnFood").addEventListener('click', () => {
    document.querySelector("#food").style.display = 'block';

    document.querySelector("#entertainment").style.display = 'none';
    document.querySelector("#clothing").style.display = 'none';
    document.querySelector("#bills").style.display = 'none';
 });

 //hide everything EXCEPT clothing
 document.querySelector("#btnClothing").addEventListener('click', () => {
    document.querySelector("#clothing").style.display = 'block';
   
    document.querySelector("#food").style.display = 'none';
    document.querySelector("#entertainment").style.display = 'none';
    document.querySelector("#bills").style.display = 'none';
 });

 //hide everything EXCEPT bills
 document.querySelector("#btnBills").addEventListener('click', () => {
    document.querySelector("#bills").style.display = 'block';
    
    document.querySelector("#food").style.display = 'none';
    document.querySelector("#clothing").style.display = 'none';
    document.querySelector("#entertainment").style.display = 'none';
 });

 //grab total budget, create seperate variable that we can adjust with each transaction
 document.querySelector("#budget-form").addEventListener("submit", (e) => {
   e.preventDefault();
   budgetSet = parseInt(budget.value);
   console.log(budgetSet);

   //displays final total of transactions
   document.getElementById("budget-total").innerText=`My Budget is $${parseInt(budget.value)}`;
   document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
   document.getElementById("budget-form").style.display = 'none';
});

let entertainmentTotal = 0;
document.querySelector("#entertainment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const entertainmentName = document.getElementById("entertainment-name").value;
    const entertainmentCost = document.getElementById("entertainment-cost").value;
    
    //finds total of transactions
    const parsedEntertainmentCost = parseFloat(entertainmentCost);
    entertainmentTotal += parsedEntertainmentCost;
    budgetSet -= parsedEntertainmentCost;

    //lists all the transcaction names and costs
    const newEntertainmentList = document.createElement("LI");
    newEntertainmentList.textContent=`Transaction Name: ${entertainmentName}, Transaction Cost:${entertainmentCost}`;
    const entertainmentListContainer = document.getElementById("entertainment-list-container");
    entertainmentListContainer.appendChild(newEntertainmentList);

    //displays final total of transactions 
    const finalEntertainmentTotal = document.getElementById("entertainment-total-end");
    finalEntertainmentTotal.innerText = `Total Spent: ${entertainmentTotal}`;

    document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
    console.log(entertainmentName, parsedEntertainmentCost, entertainmentTotal);
    console.log("working");
    console.log(budgetSet);
});

let foodTotal = 0;
document.querySelector("#food-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const foodName = document.getElementById("food-name").value;
    const foodCost = document.getElementById("food-cost").value;
    
    //finds total of transactions
    const parsedFoodCost = parseFloat(foodCost);
    foodTotal += parsedFoodCost;
    budgetSet -= parsedFoodCost;

    //lists all the transcaction names and costs
    const newFoodList = document.createElement("LI");
    newFoodList.textContent=`Transaction Name: ${foodName}, Transaction Cost:${foodCost}`;
    const foodListContainer = document.getElementById("food-list-container");
    foodListContainer.appendChild(newFoodList);

    //displays final total of transactions 
    const finalFoodTotal = document.getElementById("food-total-end");
    finalFoodTotal.innerText = `Total Spent: ${foodTotal}`;

    document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
    console.log(foodName, parsedFoodCost, foodTotal);
    console.log("working");
    console.log(budgetSet);
});

let clothingTotal = 0;
document.querySelector("#clothing-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const clothingName = document.getElementById("clothing-name").value;
    const clothingCost = document.getElementById("clothing-cost").value;
    
    //finds total of transactions
    const parsedClothingCost = parseFloat(clothingCost);
    clothingTotal += parsedClothingCost;
    budgetSet -= parsedClothingCost;

    //lists all the transcaction names and costs
    const newClothingList = document.createElement("LI");
    newClothingList.textContent=`Transaction Name: ${clothingName}, Transaction Cost:${clothingCost}`;
    const clothingListContainer = document.getElementById("clothing-list-container");
    clothingListContainer.appendChild(newClothingList);

    //displays final total of transactions 
    const finalClothingTotal = document.getElementById("clothing-total-end");
    finalClothingTotal.innerText = `Total Spent: ${clothingTotal}`;

    document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
    console.log(clothingName, parsedClothingCost, clothingTotal);
    console.log("working");
    console.log(budgetSet);
});

let billsTotal = 0;
document.querySelector("#bills-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const billsName = document.getElementById("bills-name").value;
    const billsCost = document.getElementById("bills-cost").value;
    
    //finds total of transactions
    const parsedBillsCost = parseFloat(billsCost);
    billsTotal += parsedBillsCost;
    budgetSet -= parsedBillsCost;

    //lists all the transcaction names and costs
    const newBillsList = document.createElement("LI");
    newBillsList.textContent=`Transaction Name: ${billsName}, Transaction Cost:${billsCost}`;
    const billsListContainer = document.getElementById("bills-list-container");
    billsListContainer.appendChild(newBillsList);

    //displays final total of transactions 
    const finalBillsTotal = document.getElementById("bills-total-end");
    finalBillsTotal.innerText = `Total Spent: ${billsTotal}`;

    document.getElementById("weekly-total").innerText=`My Remaining Budget is $${budgetSet}`;
    console.log(billsName, parsedBillsCost, billsTotal);
    console.log("working");
    console.log(budgetSet);
});

