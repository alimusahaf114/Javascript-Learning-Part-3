

function start(){
    const myBody = document.getElementsByTagName("body")[0];

    const myTable = document.createElement("table");
    const myTableBody = document.createElement("tbody");


    for(let j = 0 ; j < 3 ; j++){
        const myCurrontRow = document.createElement("tr");
        for( let i = 0 ; i < 3 ; i++){
            const myCurrentData = document.createElement("td");
            const myCurrentCell = document.
            createTextNode(`   
                Data of Row ${j} , and column ${i} `,

            );
            myCurrentData.appendChild(myCurrentCell);
            myCurrontRow.appendChild(myCurrentData);
        }
        myTableBody.appendChild(myCurrontRow)

    }
    myTable.appendChild(myTableBody);
    myBody.appendChild(myTable)
    myTable.setAttribute("border" , "2")
    
}