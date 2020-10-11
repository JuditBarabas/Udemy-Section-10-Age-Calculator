const age = prompt("How old are you?");

const days = (age / 4 * 366) + ((age - age / 4) * 365); //my complicated logic for leap years :D
//const days = age * 365.25; //the more easier way I saw in the solution

alert(`${age} years is roughly ${days} days`);