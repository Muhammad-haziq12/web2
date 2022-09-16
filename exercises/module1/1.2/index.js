




let e = addDatetime('WELCOME TO EVERYONE ');
console.log(e)


function addDatetime(message){
    const dateTimeNow = new Date();
    const date = dateTimeNow.toLocaleDateString();
    const heur  = dateTimeNow.toLocaleTimeString();
    return message + date + " " + " " +  heur;
}




