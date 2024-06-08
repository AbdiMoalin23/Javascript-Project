let count =0;

function increaseCount (){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML =count;
}

function checkCountValue() {
    if (count===10) {
        alert("Your account gained 10 new followers! Congrats");
    } else if (count===20){
        alert("Your account gained 20 new followers! congrats");
    }
}