
alert(addDatetime("hvdjkvdj"))


function addDatetime(message){
    const dateTimeNow = new Date();
    const date = dateTimeNow.toLocaleDateString();
    const heur  = dateTimeNow.toLocaleTimeString();
    return message + date + date + " " + " " +  heur;
    
}




