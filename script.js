function calculationElements(value) 
{
    let display = document.getElementById("display");
    let currentText = display.innerHTML;
    let lastSign = currentText.slice(-1);
    if (isOperator(lastSign) && isOperator(value)){
        return;
    }
    if (display.innerHTML === 'Error')
    {
        display.innerHTML = ''
        display.innerHTML += value;
    }
    display.innerHTML += value;
}

function clearCalculation() 
{
    let display = document.getElementById("display");
    display.innerHTML = '';
}

function calculateResult()
{
    let display = document.getElementById("display").innerHTML;
    try
    {
        result = eval(display);
        document.getElementById("display").innerHTML = result;
    }
    catch(error) 
    {
        document.getElementById("display").innerHTML = 'Error';
    }
}

function slideLeft() 
{
    let display = document.getElementById("display");
    let currentText = display.innerHTML;
    display.innerHTML = currentText.slice(0, -1);
}

function isOperator(sign){
    return ["+","-","*","/","."].includes(sign);
}