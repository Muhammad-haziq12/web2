
let countnumber = 0;

const body = document.querySelector("body");
body.addEventListener("click",button);


function button(){
    var compteur = document.getElementById("compteur");
    var message = document.getElementById("message");

    countnumber += 1;
    compteur.innerHTML = countnumber;
    
    if (countnumber >=5 && countnumber <= 9){
        message.innerHTML = "Bravo, bel échauffement gvrf !";
    }
    if (countnumber >= 10){
        message.innerHTML = "Vous êtes passé maître en l'art du clic ! ";
    }
} 



