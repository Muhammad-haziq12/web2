
alert(addDatetime("VOICI LA DATE "))


function addDatetime(message){
    const dateTimeNow = new Date();
    const date = dateTimeNow.toLocaleDateString();
    const heur  = dateTimeNow.toLocaleTimeString();
    return message + date +  " " + " et l'heure : " +  heur;
    
}




