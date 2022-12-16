// the timeConvertor function convert 24 hours clock to 12 hours clock;
function timeConvertor(time){
    switch (time) {
        case 13:
            return 1;
            break;
        case 14:
            return 2;
            break;
         case 15:
            return 3;
            break;
        case 16:
            return 4;
            break;
        case 17:
            return 5;
            break;
        case 18:
            return 6;
            break;
        case 19:
            return 7;
            break;
        case 20:
            return 8;
            break;
        case 21:
            return 9;
            break;    
        case 22:
            return 10;
            break;

        case 23:
            return 11;
            break;
        case 24:
            return 12;
            break; 
         
        default:
            break;
    }
}

// the below function gives  a tenth place of zero if the input are in single digit . This will give the time text uniformity;
function addTenthPlace(input){
    switch (input) {
            case 0:
                return "00";
            break;
            case 1:
                return "01";
            break;
            case 2:
                return "02";
            break;
            case 3:
                return "03";
            break;
            case 4:
                return "04";
            break;
            case 5:
                return "05";
            break;
            case 6:
                return "06";
            break;
            case 7:
                return "07";
            break;
            case 8:
                return "08";
            break;
            case 9:
                return "09";
            break;
            default: return input;
            break;

    }
}


// AM_PM function returns if the the input time should have AM or PM 
function AM_PM(time){
    if(time=>12)
    return "PM";
    else
    return "AM";
}

// the below function sends the inner html to the id time;

function updateTime(){

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeText = document.getElementById("time");
    hours = timeConvertor(hours);
    minutes = addTenthPlace(minutes);
    seconds = addTenthPlace(seconds);
    

    
    
    timeText.innerHTML=hours+":"+minutes+":"+seconds+" "+" "+" "+AM_PM(hours);   



}

setInterval(() => {
    updateTime()
}, 1000);








