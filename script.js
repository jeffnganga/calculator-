const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("total")

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C"){
            clearTotal()
        } else if (buttonValue === "="){
            calculateTotal()
        } else{
            appendValue(buttonValue);
        }
    })
}

function clearTotal(){
    inputFieldEl.value = "";
}
function calculateTotal(){
    inputFieldEl.value = eval(inputFieldEl.value);
}
function  appendValue(buttonValue){
    inputFieldEl.value += buttonValue;
    //inputFieldEl.value = inputFieldEl.value+buttonValue;
}