const btn = document.querySelector("button");
function random(number){
    return Math.floor(Math.random() * (number + 1));
}

const controller = new AbortController();

btn.addEventListener("click" , () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol ;},
    {signal: controller.signal}
);

// controller.abort()












// // const myButton = document.getElementById("myButton");
// const myButton = document.getElementById("mybtn")

// function changeColor(event){
//     myBox.style.backgroundColor = "green" ;
//     myBox.textContent = "Ocuhhhh" ;
//     // let myTextNode = document.createTextNode("Hi Musahaf Ali");
//     // myButton.append(myTextNode);
// }


// myButton.addEventListener("click" , changeColor);

// myButton.addEventListener("mouseover" , event => {
//     myBox.style.backgroundColor = "Yellow" ;
//     myBox.textContent = "Please..!"
// });
// myButton.addEventListener("mouseout" , changeColor)
//         // myBox.style.backgroundColor = "lightgreen";
//     // myBox.textContent= "hey...";
