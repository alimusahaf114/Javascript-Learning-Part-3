const newListItem = document.createElement("li");
newListItem.textContent = "Coconut" ;
document.body.append(newListItem);
newListItem.id = "coconut";
// newListItem.style.backgroundColor = "blue" ; 
// newListItem.style.color = "white" ;
// document.getElementById("fruits").prepend(newListItem)
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem , orange)








// //=======Create the Elements=========
// const newH1 = document.createElement("h1");
// newH1.textContent = "I like Chai" ;
// newH1.id = "myH1";
// newH1.style.color = 'blue';
// newH1.style.textAlign = "center"
// document.body.append(newH1)
// // document.body.prepend(newH1)

// document.getElementById("box1").append(newH1)
// // document.getElementById("box1").prepend(newH1)
// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1 , box2)

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1 , boxes[2])

// document.getElementById("box1").removeChild(newH1)