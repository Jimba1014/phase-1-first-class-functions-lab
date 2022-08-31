//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers= function(drivers) {
    return drivers.slice(0,2)
} 
const returnLastTwoDrivers= function(drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(multiplier){
    return function (fare){
        return fare*multiplier
    }
}
const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier*2
}
const fareTripler = function(createFareMultiplier){
    return createFareMultiplier*3
}
const selectDifferentDrivers = function(drivers, driversNames){
    if (driversNames === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);}
        //return returnLastTwoDrivers(drivers);}
    else if (driversNames === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);}
        //return returnFirstTwoDrivers(drivers);}
    }
/*const selectDifferentDrivers = function(drivers, getDriversFunction){
    let selectedDrivers=getDriversFunction(drivers)
    let maybeOtherDrivers= returnFirstTwoDrivers(drivers)
    
    if (selectedDrivers===maybeOtherDrivers)
        return returnLastTwoDrivers(drivers);
    else 
        return returnFirstTwoDrivers(drivers)*/
