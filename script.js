let totalSavings = 0;

let monthAmountDebit = 0;
let monthAmountDebit1 = 0;
let monthAmountDebit2 = 0;
let monthAmountDebit3 = 0;
let monthAmountDebit4 = 0;
let monthAmountDebit5 = 0;
let monthAmountDebit6 = 0;
let monthAmountDebit7 = 0;
let monthAmountDebit8 = 0;
let monthAmountDebit9 = 0;
let monthAmountDebit10 = 0;
let monthAmountDebit11 = 0;
let monthAmountDebit12 = 0;


document.querySelector("#addDebitId").addEventListener("click", (event) => {
    
    
    if(document.querySelector("#optionInput").value=="January"){
        monthAmountDebit1 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit1;
    }
    else if(document.querySelector("#optionInput").value=="February"){
        monthAmountDebit2 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit2;
    }
    else if(document.querySelector("#optionInput").value=="March"){
        monthAmountDebit3 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit3;
    }
    else if(document.querySelector("#optionInput").value=="April"){
        monthAmountDebit4 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit4;
    }
    else if(document.querySelector("#optionInput").value=="May"){
        monthAmountDebit5 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit5;
    }
    else if(document.querySelector("#optionInput").value=="June"){
        monthAmountDebit6 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit6;
    }
    else if(document.querySelector("#optionInput").value=="July"){
        monthAmountDebit7 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit7;
    }
    else if(document.querySelector("#optionInput").value=="August"){
        monthAmountDebit8 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit8;
    }
    else if(document.querySelector("#optionInput").value=="September"){
        monthAmountDebit9 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit9;
    }
    else if(document.querySelector("#optionInput").value=="October"){
        monthAmountDebit10 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit10;
    }
    else if(document.querySelector("#optionInput").value=="Novemmber"){
        monthAmountDebit11 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit11;
    }
    else if(document.querySelector("#optionInput").value=="December"){
        monthAmountDebit12 += JSON.parse(document.querySelector("#debitId").value);
        monthAmountDebit = monthAmountDebit12;
    }
    
    totalSavings += monthAmountDebit;

    document.querySelector("#optionInput").value = "";
    document.querySelector("#debitId").value = "";

    const inputData = document.querySelector("#totalSavingId");
    inputData.textContent = totalSavings;
    inputData.style.fontSize = "30px";
    inputData.style.paddingLeft = "15px";
});


document.querySelector("#addExpense").addEventListener("click",(event)=>{
    const createObject = {
        name: document.querySelector("#expenseNameId").value.trim(),
        cost: parseFloat(document.querySelector("#expenseCostId").value)
    };
    const parentCont = document.querySelector("#containerId");

    makeNewAdd(createObject,parentCont);

    // Clear inputs after adding expense
    document.querySelector("#expenseNameId").value = "";
    document.querySelector("#expenseCostId").value = "";

    
});




const makeNewAdd = (createObj, parent) => {
    // Create a new div to hold the expense item
    const createDivs = document.createElement("div");
    createDivs.style.display = "flex"; // Set to flex for alignment
    createDivs.style.justifyContent = "space-between"; // Space items evenly
    createDivs.style.minWidth = "600px";
    createDivs.style.height = "40px";
    createDivs.style.backgroundColor = "rgb(55, 54, 54)";
    createDivs.style.justifyItems = "center";
    createDivs.style.paddingLeft = "10px";
    createDivs.style.borderRadius = "5px";
    
    

    // Create a new div for the expense name
    const nameDiv = document.createElement("div");
    nameDiv.textContent = createObj.name; // Set the text to the expense name
    nameDiv.style.backgroundColor = "rgb(55, 54, 54)";
    nameDiv.style.color = "whitesmoke";
    nameDiv.style.fontSize = "28px";

    // Create a new div for the expense cost
    const costDiv = document.createElement("div");
    costDiv.textContent = `₹ ${createObj.cost}`; // Set the text to the expense cost
    costDiv.style.backgroundColor = "rgb(55, 54, 54)";
    costDiv.style.color = "whitesmoke";
    costDiv.style.fontSize = "28px";

    console.log(createObj.cost);
    const newExpense = document.querySelector("#totalSavingId");
    totalSavings = totalSavings - createObj.cost;
    newExpense.textContent = totalSavings;


    //Create a button that can remove 
    const buttonDiv = document.createElement("button");
    buttonDiv.type = "submit";
    buttonDiv.textContent = "DELETE";
    buttonDiv.style.color = "black";
    buttonDiv.style.backgroundColor = "aliceblue";
    /* buttonDiv.style.width = "40px"; */
    buttonDiv.style.fontSize = "25px";
    buttonDiv.style.borderRadius = "5px";
    
    



    // Append both name and cost and button divs to the parent div
    createDivs.appendChild(nameDiv);
    createDivs.appendChild(costDiv);
    createDivs.appendChild(buttonDiv);
    
    // Finally, append the whole createDivs to the parent container
    parent.appendChild(createDivs);

    buttonDiv.addEventListener("click",(event)=>{
        createDivs.remove();
        totalSavings = totalSavings+createObj.cost;
        const btnAftDel = document.querySelector("#totalSavingId");
        btnAftDel.textContent = totalSavings;
    })
}





document.querySelector("#monthJan").addEventListener("click",(event)=>{
    alert(`The amount debited in January is ${monthAmountDebit1}`);
});

document.querySelector("#monthFeb").addEventListener("click",(event)=>{
    alert(`The amount debited in February is ${monthAmountDebit2}`);
});

document.querySelector("#monthMar").addEventListener("click",(event)=>{
    alert(`The amount debited in March is ${monthAmountDebit3}`);
});

document.querySelector("#monthApr").addEventListener("click",(event)=>{
    alert(`The amount debited in April is ${monthAmountDebit4}`);
});

document.querySelector("#monthMay").addEventListener("click",(event)=>{
    alert(`The amount debited in May is ${monthAmountDebit5}`);
});

document.querySelector("#monthJun").addEventListener("click",(event)=>{
    alert(`The amount debited in June is ${monthAmountDebit6}`);
});

document.querySelector("#monthJul").addEventListener("click",(event)=>{
    alert(`The amount debited in July is ${monthAmountDebit7}`);
});

document.querySelector("#monthAug").addEventListener("click",(event)=>{
    alert(`The amount debited in August is ${monthAmountDebit8}`);
});

document.querySelector("#monthSep").addEventListener("click",(event)=>{
    alert(`The amount debited in September is ${monthAmountDebit9}`);
});

document.querySelector("#monthOct").addEventListener("click",(event)=>{
    alert(`The amount debited in October is ${monthAmountDebit10}`);
});

document.querySelector("#monthNov").addEventListener("click",(event)=>{
    alert(`The amount debited in November is ${monthAmountDebit11}`);
});

document.querySelector("#monthDec").addEventListener("click",(event)=>{
    alert(`The amount debited in December is ${monthAmountDebit12}`);
});


