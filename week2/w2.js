const form = document.getElementById("js-guess");
const range = document.getElementById("js-range");
const title = document.querySelector(".js-title");
const result = document.getElementById("js-result");
const guessNum = form.querySelector("input");
const resultSpan = result.querySelector("span");

function slider()
{
    const maxValue = title.querySelector("span");
    maxValue.innerHTML = range.value;
    
    form.addEventListener("submit", makeRand);
    
} 
function sliderprint()
{
    range.oninput = slider;
    
}
sliderprint();

function makeRand(e){
    e.preventDefault();
    const userNum = guessNum.value;
    const max = range.value;
    const comNum = Math.ceil(Math.random() * max); 

    compare(userNum,comNum);
    
}
function compare(userNum, comNum)
{
    userNum = parseInt(userNum);
    if(userNum > comNum){ 
        resultSpan.innerHTML=
        `You choose: ${userNum}, the machine choose: ${comNum} <br />
        You win!`;
    }
    else if(userNum < comNum){
        resultSpan.innerHTML=
        `You choose: ${userNum}, the machine choose: ${comNum} <br />

        You lost!`;
    }
    else if(userNum === comNum){
        resultSpan.innerText=`You choose: ${userNum}, the machine choose: ${comNum} <br />
        Retry`;
    }
    
}

