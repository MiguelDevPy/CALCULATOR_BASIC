
// CAPTURA DE BOTONES========================================================================================================================

const NUMBER_BUTTON = document.getElementsByName('data-number')
const OPERATION_BUTTON = document.getElementsByName('data-operation')
const CLEAR_SCREEN_BUTTON = document.getElementsByName('data-delete')
const IGUAL_BUTTON = document.getElementsByName('data-igual')
const DEL = document.getElementsByName('data-deleteOneByOne')
const display = document.getElementById('result')


// MANEJO DEL DISPLAY ========================================================================================================================

const NOT_VALUE = ''
let currentValue = NOT_VALUE;
const MESSAGE_ERROR = {
        syntaxError : 'ERROR! Falta una expesion', 
        mathError: 'ERROR! La division por cero no existe'
}

// EVENTOS DE CADA BOTON ========================================================================================================================

DEL.forEach(button => button.addEventListener('click',()=> deleteOne()))
NUMBER_BUTTON.forEach(button => button.addEventListener('click', ()=> addNumber(button.innerText)))
OPERATION_BUTTON.forEach(button => button.addEventListener('click', ()=> saveValues(button.innerText)))
CLEAR_SCREEN_BUTTON.forEach(button => button.addEventListener('click', ()=> clearScreen()))
IGUAL_BUTTON.forEach(button => button.addEventListener('click', ()=> solveOperation()))

// FUNCIONES ========================================================================================================================

const deleteOne = () => {
    if(currentValue === NOT_VALUE) {
        return
    }
    else if (currentValue !== NOT_VALUE)
    {
        if(typeof(currentValue) === typeof(Number.MAX_SAFE_INTEGER)){
            return
        } else {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue
        }
    }
}// Elimina de a uno los numeros que estan en la pantalla

const addNumber =(number)=>{
    if(currentValue.includes('.')){
        if (number === '.') return
    }
    currentValue = currentValue.toString() + number.toString()
    display.value = currentValue
} // Agrega numeros a la pantalla, los muestra

const saveValues = (operator) =>{
    display.value = operator;
    typeOperation = operator
    previousValue = currentValue
    currentValue = NOT_VALUE;
} // Muestra la operacion, antes de ejecutar el siguiente numero guarda una variable en numero ingresado previousValuemente

const solveOperation = ()=>{
    /* Agrega las otras operaciones como suma resta multiplicacion
dvision, potenciacion ect */
    if(typeOperation === '√'){
        n = parseFloat(previousValue)
        getResult = Math.sqrt(n)
        display.value = getResult
        currentValue = getResult
        return
    }
        firstNumber =  parseFloat(previousValue)
        secondNumber = parseFloat(currentValue)
        if(isNaN(firstNumber) || isNaN(secondNumber)){
            display.value = MESSAGE_ERROR.syntaxError
            currentValue = NOT_VALUE
            previousValue = NOT_VALUE
            return
        } else
        {
        switch (typeOperation) {
            case '+':
                getResult = firstNumber + secondNumber
                break;
            case '-':
                getResult = firstNumber - secondNumber
                break;
            case '*':
                getResult = firstNumber * secondNumber
                break;
            case '/':
                if(secondNumber === 0){
                    getResult = MESSAGE_ERROR.mathError
                    display.value = NOT_VALUE;
                } else{
                    getResult = firstNumber / secondNumber
                }
                break;
            case '^':
                getResult = Math.pow(firstNumber, secondNumber)
                break;
            // case '√':
            //     getResult = Math.sqrt(secondNumber)
            //     break;
            default:
                getResult = "Sintax ERROR"
                break;
        }
    }
        display.value = getResult;
        currentValue = getResult;


} // Realiza el calculo y lo muestra en pantalla haz las validaciones correspondientes

const clearScreen = () =>{
    previousValue = NOT_VALUE;
    currentValue = NOT_VALUE;
    display.value = NOT_VALUE;
}


// OPERACIONES CON UN SOLO ARGUMENTO ==========================================================

// const unArgumento = (operador)=> {
//     if(operador == '^'){ 
//     getResult = Math.sqrt(currentValue)
//     display.value = getResult;
//     currentValue = getResult;
//     }

// }


// FUNCIONES TRIGONOMETRICAS ==========================================================

// const funcionesTrignometricas 