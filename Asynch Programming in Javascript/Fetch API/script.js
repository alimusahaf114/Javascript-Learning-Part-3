let URL = "https://cat-fact.herokuapp.com/facts";
const mushi = document.getElementById("mushi");
const getFacts = async () => {
    console.log("getting Data..........");
    let response = await fetch(URL);
    console.log(response);
    let jsonData = await response.json();   
    mushi.textContent = jsonData[Math.floor(Math.random() * jsonData.length)].text;
    mushi.style.backgroundColor = "yellow"
    mushi.style.fontSize = "20px"
    
}
// setInterval(getFacts , 2000)


// getFacts();