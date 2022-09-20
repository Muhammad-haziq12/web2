
const redFire = document.querySelector('.red');
const orangeFire = document.querySelector('.orange');
const greenFire = document.querySelector('.green');
/************************************* */
const redColor = 'red';
const orangeColor = 'orange';
const greenColor =  'green';
const noColor  = 'white';


const myInterval = 500;

showRedLampDelai(myInterval)


function showRedLamp(){
    redFire.style.backgroundColor = redColor;
}
function clearRedLamp(){
    redFire.style.backgroundColor = noColor;
}
function showOrangeLamp(){
    orangeFire.style.backgroundColor = orangeColor;
}
function clearOrangeLamp(){
    orangeFire.style.backgroundColor = noColor;
}
function showGreenLamp(){
    greenFire.style.backgroundColor = greenColor;
}
function clearGreenLamp(){
    greenFire.style.backgroundColor = noColor;
}

function showRedLampDelai(delai){
    
    window.setTimeout(() => {
        clearOrangeLamp()
        console.log('A')
        showRedLamp()
        // setTimeout(() => clearRedLamp(), delai)
        // showOrangeLampDelai(delai)
        setTimeout(()=> showOrangeLampDelai(delai), delai)
    }, delai);
}

function showOrangeLampDelai(delai){
    
    window.setTimeout(() => {
        clearRedLamp()
        console.log('b')
        showOrangeLamp()
        // setTimeout(() => clearOrangeLamp(), delai)
        // showGreenLampDelai(delai)
        setTimeout(()=> showGreenLampDelai(delai), delai)
    },2*delai);
}

function showGreenLampDelai(delai){
    
    window.setTimeout(() => {
        clearOrangeLamp()
        showGreenLamp()
        // setTimeout(() => clearGreenLamp(), delai)
        // showOrangeLampDelaiBIS(delai)
        setTimeout(()=> showOrangeLampDelaiBIS(delai), delai)
    },3*delai);
}

function showOrangeLampDelaiBIS(delai){
    
    window.setTimeout(() => {
        clearGreenLamp()
        showOrangeLamp()
        // setTimeout(() => clearOrangeLamp(), delai)
        // showRedLampDelai(delai)
        setTimeout(()=> showRedLampDelai(delai), delai)
    },4*delai);
}












