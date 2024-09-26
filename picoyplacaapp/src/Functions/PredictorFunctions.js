
function analizeHour(hour){
    //Schedule 7:00am - 9:30am / 16:00pm - 19:30
    hour = hour.split(":");
    

    //To the morning
    if(hour[0] >= 7 && hour[0] <= 9){

        //If is not at 9am, don't need to verify the minute
        if(hour[0] != 9){
            return "1";
        }

        //If it's at 9am

        if(hour[1] <= 30){
            //Can´t road at morning
            return "1";
        }else{
            return "0";
        }
        
    }


    //To the evening
    if(hour[0] >= 16 && hour[0] <= 19){

        //If is not at 19pm, don't need to verify the minute
        if(hour[0] != 19){
            return "2";
        }

        //If it's at 19pm
        if(hour[1] <= 30){
            //Can´t road at evening
            return "2";
        }else{
            return "0";
        }
        
    }

    //Can road
    return 0;
}

export function predictPlate(plate, day, hour){
    //if canRoad is == 0 then can road
    let canRoad = 0;

    //Monday: 1, 2
    if(day == "Monday" && (plate[plate.length - 1] == "1" || plate[plate.length - 1] == "2")){
        canRoad = analizeHour(hour);
    }
    //Tuesday: 3, 4
    if(day == "Tuesday" && (plate[plate.length - 1] == "3" || plate[plate.length - 1] == "4")){
        canRoad = analizeHour(hour);
    }
    //Wednesday: 5, 6
    if(day == "Wednesday" && (plate[plate.length - 1] == "5" || plate[plate.length - 1] == "6")){
        canRoad = analizeHour(hour);
    }
    //Thursday: 7, 8
    if(day == "Thursday" && (plate[plate.length - 1] == "7" || plate[plate.length - 1] == "8")){
        canRoad = analizeHour(hour);
    }
    //Friday: 9, 0
    if(day == "Friday" && (plate[plate.length - 1] == "9" || plate[plate.length - 1] == "0")){
        canRoad = analizeHour(hour);
    }


    if(canRoad == 0){
        //Can road
        return("Can Road."); 

    }else if(canRoad == 1){
        return("Can't road; since 7:00am to 9:30am.");
    }else if(canRoad == 2){
        return("Can't road; since 16:00pm to 19:30pm.");
    }
    
}

export function validateHour(hour){
    //The hours are in 24 hours format, and need to be separated by ":"

    if(hour == null || hour.length < 1){
        return "The string of the hour is empty.";
    }


    //Validate symbol ":
    if(!hour.includes(":")){
        return "The hour needs to have the character ':' between hours and minutes.";
    }

    
    //Separate the characters of the hour by ":"
    let separated = hour.split(":");

    //The hour can't have letters
    let haveLetters = /[a-zA-Z\!@#\$%\^\&*\)\(+=._-]/.test(separated[0]);
    let haveLetters2 = /[a-zA-Z\!@#\$%\^\&*\)\(+=._-]/.test(separated[1]);

    //If the hour haven't letters or symbols is correct
    if(haveLetters || haveLetters2){
        return "The hour can't have letters or symbols.";
    }

    //The hours needs to have at least one character, but not more than 2
    if(separated[0].length < 1 || separated[0].length > 2){
        return "The hours should have 1-2 characters.";
    }


    //The minutes should have 2 characters
    if(separated[1].length < 2 || separated[1].length > 2){
        return "The minutes should have 2 characters.";
    }

    //Validate the maximun number 23 for the hours and 59 for the minutes
    //To hours
    if(parseInt(separated[0]) > 23){
        return "The day has only 23:59 hours.";
    }

    //To minutes
    if(parseInt(separated[1]) > 59 || parseInt(separated[1]) < 0){
        return "Please write number only between 0-59.";
    }

    //If all its correct return true
    return true;

 
}

export function validateDate(date){
    if(date == null || date.length < 1){
        return "The date is empty.";
    }
    //If is not empty
    return true;
}

export function validateLicensePlate(plate){
    //Let's to validate a plate
    
    //In Ecuador the License plates are composed by 3 letters, a "-" and three o four numbers
    
    //The plates have's minimun 6 characters, 3 letters, a optional middle dash and minimun 
    //three and maximun four numbers

    if(plate == null || plate.length < 1){
        return "The string of the plate is empty.";
    }


    //Minimun of 6 characters
    if(plate.length < 6){
        return "Not enought characters."
    }
    
    //Get the three first characters of the plate string
    let letters = plate.substring(0, 3); 
        
    //Template string to verify that the first three letters are only letters and not numbers
    let isLettersOnly = /^[a-zA-Z]+$/.test(letters);

    //If there are only letters
    if(!isLettersOnly){
        return "The format is invalid. Example: ACD-4125.";
    }

    //Let's verify if contains a middle dash
    if(plate.includes("-")){
        //If includes, let's to remove them
        plate = plate.replace("-", "");
    }
            
    //Get only the numbers at the end of the plate
    let numbers = plate.substring(3);  

    //If all the characters are numbers and contains between 3 and four numbers
    let areNumbers= /^\d+$/.test(numbers);

    if(areNumbers && numbers.length >= 3 && numbers.length <= 4){
        //Return true, because the plate is valid
        return true;
    }else{
                
        //If the characters thath should be numbers are letters or symbols
        let areLetters = /[a-zA-Z\!@#\$%\^\&*\)\(+=._-]/.test(numbers);
        if(areLetters){
            return "The characters after the three initial letters needs to be numbers and not have more letters.";
        }

        return "A plate has at least 3 numbers and maximun 4.";
    }
}

//Needs a number between 0 and 6, where 0 is sunday, 1 is monday and 6 is saturday
export function dayConverter(number){
    switch(number){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 0:
            return "Sunday";
        default:
            return "Invalid";
    }
}





