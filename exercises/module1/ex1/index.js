
const dateTimeNow = new Date();

alert(`${addDatetime(zeb)} gfhghg `);

function addDatetime(message){
    const dateTimeNow = new Date();
    const date = dateTimeNow.toLocaleDateString();
    const heur  = dateTimeNow.toLocaleTimeString();
    console.log(date + " " + heur + " "  + " " + message);
    
}




