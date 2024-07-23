const buttonEl = document.querySelectorAll("button");
const inputEl = document.getElementById("result");

for(let i=0; i<buttonEl.length; i++){
    buttonEl[i].addEventListener("click",()=>{
        const buttonVal = buttonEl[i].textContent;

        if(buttonVal==="C"){
            clearResult();
        }else if(buttonVal==="="){
            calculateResult();
        }else{
            appendValue(buttonVal);
        }
    });
}

function clearResult(){
    inputEl.value="";
}
function calculateResult(){
    inputEl.value=eval(inputEl.value);
}
function appendValue(buttonVal){
    inputEl.value += buttonVal;
}