var phoneNumber = prompt("Please enter your phone number in the following form: xxx-xxx-xxxx. Your phone number will be locked away in a tiny box in the back room, so no worries about spam.");

if (phoneNumber[3] === "-" && phoneNumber[7] === "-") {
	alert("Thank You");
}
	else  {
		alert("Please try again. Make sure you use the correct formatting.");

}

var birthDate = prompt("Please enter your birth date in the following form: xx/xx/xx. Once again, your birth date will be locked away in a tiny box in the back room, so no worries about spam.");

if (birthDate[2] === "/" && birthDate[5] === "/") {
	alert("Thank You");
}
	else  {
		alert("Please try again. Make sure you use the correct formatting.");

}

var postalCode = prompt("Please enter your postal code in the following form: xxxxx OR xxxxx-xxxx. We are serious, your postal code will be locked away in a tiny box in the back room, so no worries about spam.");

if (postalCode.length === 5 || postalCode[5] === "-") {
	alert("Thank You");
}
	else  {
		alert("Please try again. Make sure you use the correct formatting")
}
var stateAbrv = prompt("Please enter your state abbreviation in the following form: XY . We are serious, your state abbreviation will be locked away in a tiny box in the back room, so no worries about spam.");

if (stateAbrv.length === 2 && stateAbrv === stateAbrv.toUpperCase()) {
	alert("Thank You");
}
	else  {
		alert("Please try again. Make sure you use the correct formatting")
}		
var marriage = prompt("Are you married? Please answer with yes or no. We won't tell a soul. Cross our hearts.");
	if (marriage.toLowerCase() === 'yes' || marriage.toLowerCase() === 'no') {
	alert("Thank You");
}
	else  {
		alert("Please try again. Make sure you use the correct formatting")
}		




