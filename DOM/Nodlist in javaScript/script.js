let buttons = document.querySelectorAll(".myButtons");

// buttons[1].style.backgroundColor = "Green";
// buttons[1].textContent = "Musahaf"
// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😁"
// })

// buttons.forEach(button  => {
//     button.addEventListener("click" , event => {
//         event.target.style.backgroundColor = "green"
//     })
// })

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);


buttons.forEach(button => {
    button.addEventListener("mouseover" , event =>{
        event.target.style.backgroundColor = "tomato"
    })
    button.addEventListener("mouseout" , event =>{
        event.target.style.backgroundColor = "rgb(111, 111, 251)"
    })
})


