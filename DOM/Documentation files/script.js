
// function setBackground(){
//     const paragraph = document.getElementsByTagName("p");
//     const secondParagraph = paragraph[1];
//     secondParagraph.style.backgroundColor = "Red"
//     secondParagraph.style.color = "white" ;

//     myTextNode = document.createTextNode(" World");
//     // secondParagraph.appendChild(myTextNode);

//     myNewTagName = document.createElement("p");
//     document.body.appendChild(myNewTagName).appendChild(myTextNode);

//     secondParagraph.removeChild(myTextNode);
// }












//=============== Creating a Table ===================
// function generateTable(){
//     const tbl = document.createElement("table");
//     const tblbody = document.createElement("tbody");

//     for(let i = 0 ; i < 2 ; i++){
//         const row =  document.createElement("tr");
//         for(let j = 0 ; j < 2 ; j++){
//             const cell = document.createElement("td");
//             const cellText = document.createTextNode(`cell in the row ${i} , column ${j}`);
//             cell.appendChild(cellText);
//             row.appendChild(cell);
//         }

//         tblbody.appendChild(row)
//     }
//     tbl.appendChild(tblbody);
// document.body.appendChild(tbl);
// tbl.setAttribute("border" , "2");

// }





















// function change(){
//     const header = document.getElementsByTagName("h2").item(0)
//     header.firstChild.data = "A dynamic Element";

//     const para = document.getElementsByTagName("p").item(0);
//     para.firstChild.data = "This is the first paragraph" ;

//     const newText = document.createTextNode("This is the second paragraph.");
//     const newElement = document.createElement("p");


//     newElement.appendChild(newText);
//     para.parentNode.appendChild(newElement)
// }