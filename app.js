


function updateTime(){

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeText = document.getElementById("time")

    timeText.innerHTML=hours+" "+minutes+" "+seconds;

    console.log("function is running");
    
}

setInterval(() => {
    updateTime()
}, 1000);





