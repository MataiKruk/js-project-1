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
});

