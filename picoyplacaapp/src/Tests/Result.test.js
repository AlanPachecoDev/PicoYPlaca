
//Here I used Jest to test the function that evaluate the plate, day and hour and say if the car can road or not.
//Jest is a testing tool developed by Facebook.


import * as functions from '../Functions/PredictorFunctions';

it('Tests', () => {
  //Here I put some calls to the predictPlate function that have three parameters, 
  //with expect I can compare the exécted result of the function call

    //Predict plate
    expect(functions.predictPlate("AKI-452", "Monday", "17:09")).toEqual("Can't road; since 16:00pm to 19:30pm.");
    expect(functions.predictPlate("DNW-582", "Tuesday", "6:08")).toEqual("Can Road.");
    expect(functions.predictPlate("VUI-458", "Wednesday", "19:29")).toEqual("Can Road.");

    expect(functions.predictPlate("KIN-457", "Thursday", "18:45")).toEqual("Can't road; since 16:00pm to 19:30pm.");
    expect(functions.predictPlate("VYE-127", "Tuesday", "18:26")).toEqual("Can Road.");
    expect(functions.predictPlate("YEN-806", "Thursday", "17:22")).toEqual("Can Road.");
    expect(functions.predictPlate("DJQ-123", "Tuesday", "8:40")).toEqual("Can't road; since 7:00am to 9:30am.");
    expect(functions.predictPlate("MLA-736", "Tuesday", "22:34")).toEqual("Can Road.");
    expect(functions.predictPlate("DRE-120", "Friday", "9:07")).toEqual("Can't road; since 7:00am to 9:30am.");
    expect(functions.predictPlate("QWS-483", "Saturday", "13:15")).toEqual("Can Road.");
    expect(functions.predictPlate("QWS-481", "Sunday", "19:29")).toEqual("Can Road.");
  
    //Validate hour
    expect(functions.validateHour("8:40")).toBeTruthy();
    expect(functions.validateHour("1800")).toEqual("The hour needs to have the character ':' between hours and minutes.");
    expect(functions.validateHour("18:0")).toEqual("The minutes should have 2 characters.");
    expect(functions.validateHour("18-00")).toEqual("The hour needs to have the character ':' between hours and minutes.");

    //Validate plate
    expect(functions.validateLicensePlate("ADG-158")).toBeTruthy();
    expect(functions.validateLicensePlate("ADG-15")).toEqual("A plate has at least 3 numbers and maximun 4.");
    expect(functions.validateLicensePlate("AG-15")).toEqual("Not enought characters.");
    expect(functions.validateLicensePlate("AG5-15")).toEqual("The format is invalid. Example: ACD-4125.");
  });