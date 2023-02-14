const increBtn = document.getElementById("increment")
const decreBtn = document.getElementById("decrement")
const submitBtn = document.getElementById("submit")
const resetBtn = document.getElementById("reset")
const inputField = document.getElementById("userInput")
const userInfo = document.getElementById("userInfoHolder")
let numberOfRow = "";



submitBtn.addEventListener ("click", function(){
    numberOfRow = inputField.value;
    userInfo.innerHTML = `
    <p id="outputTitle">Which row are you at?</p>
    <p>You are at row ${numberOfRow}</p>
    `
    inputField.value = null
})
increBtn.addEventListener("click", function(){
    numberOfRow ++;
    userInfo.innerHTML = `
    <p id="outputTitle">Which row are you at?</p>
    <p>You are at row ${numberOfRow}</p>
    `
})
decreBtn.addEventListener("click", function(){
    
    if (numberOfRow <= 0){
        numberOfRow = 0
    } else{
        numberOfRow --;
    }
    userInfo.innerHTML = `
    <p id="outputTitle">Which row are you at?</p>
    <p>You are at row ${numberOfRow}</p>
    `
})
resetBtn.addEventListener("click", function(){
    numberOfRow = 0;
    userInfo.innerHTML = `
    <p id="outputTitle">Which row are you at?</p>
    <p>You are at row ${numberOfRow}</p>
    `
})