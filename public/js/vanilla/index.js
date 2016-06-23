// This is the vanilla version of the self driving car.
// This file gets data and shows it on the vehicle dashboard.
// We get the imporant info from the various services the car exposes to us...


// to/from mph
function convertSpeed(speed, targetUnit) {
  // to mph
  if (targetUnit === "mph") {
    return speed * 0.621371; // FIXME: Possible error
  }

  return  speed * 1.609344;
}

function getChanceOfCollision() {
  var otherCars = getNearbyVehicleCount()
  var  speed = getCurrentSpeed();
  var closestCarSpeed = getOncomingVehicleSpeed();
  var roadCondition = getRoadCondition();

  return otherCars * convertSpeed(speed, "mph") * roadCondition * closestCarSpeed / 100 * getFancyRandomNumber(0, 10000000)
}

  function getFancyRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function getCurrentSpeed() {

// assumes mph
  var min = 0
  var max = 250

   // TODO: Hook this up to the speed service in the car
  var currentSpeed = getFancyRandomNumber(min, max);
  console.log("currentSpeed", currentSpeed) // FIXME: Remove this
  return currentSpeed;
}

function getRoadCondition() {
  // TODO: connect this to the proper service
  // return getRoadConditionFromService();
   return "wet" || "dry" || "icy";
}

// duration and amount?
function getRemainingGasAmount() {
 // TODO: get these from the service...
  var tankCapacity = 16; // gallons
  var gasMileage = 35; // miles / gallon
  var totalMileage = tankCapacity * gasMileage;

  var milesDriven = getFancyRandomNumber(0, totalMileage);

  var remainingMiles = totalMileage - milesDriven;
  return remainingMiles;
}

// nearby vehicles
function getNearbyVehicleCount(vehicle){
  return vehicle.getSpeed();
  return 5
}

// returns the speed of the closest oncoming vehicle
function getOncomingVehicleSpeed() {
      var min = 0
      var max = 350; // This is a feature we promised, but we are totally guessing.

  // TODO: Hook this up to the speed detection service in the car
  var currentSpeed = Math.floor(Math.random() * (max - min)) + min;
  return currentSpeed
}


function getChanceOfExplosion() {
  return getFancyRandomNumber(0, 100) * 1.528493;
}

function getEngineHealth() {
  return getFancyRandomNumber(0, 100);
}

// round everything up
function init() {
  var speedEl = document.getElementById('current_speed');
  var gasEl = document.getElementById('gas_left');
  var engineHealthEl = document.getElementById('engine_health');

  // render status to the DOM
  speedEl.innerHTML = getCurrentSpeed();
  engineHealthEl.innerHTML = getEngineHealth();
  gasEl.innerHTML = getRemainingGasAmount();

  getChanceOfExplosion();
  getChanceOfCollision();

  // document.getElementById('container').innerHTML = 'look ma the car I built in the back shed drives itself'
}

init()

