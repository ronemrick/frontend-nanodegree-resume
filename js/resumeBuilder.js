/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Ron");

//var awesomeThoughts = "I am Ron and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN!");
//$("#main").append(funThoughts);

var skills = ["programming", "teaching", "Javascript"];

var bio = {
	"name" : "Ron Emrick",
	"role" : "Web Developer",
	"contactInfo" : {
		"mobile" : "555-123-4567",
		"email" : "ronemrick@gmail.com",
		"twitter" : "@ronemrick",
		"github" : "ronemrick",
		"location" : "New Hampshire"
	},
	"pictureURL" : "images/biophoto.jpg",
	"message" : "Lorem ipsum dolor sit amet, ne etiam dissentias mel, id saepe noster contentiones nam!",
	"skills" : skills
};

//var name = "Ron Emrick";
var formattedName = HTMLheaderName.replace("%data%", bio.name);

//var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);

$("#header").prepend(formattedMobile);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

