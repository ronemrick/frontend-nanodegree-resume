/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Ron");

//var awesomeThoughts = "I am Ron and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN!");
//$("#main").append(funThoughts);

var skills = ["programming", "teaching", "Javascript"];

// Declared using Object Literal Notation (JSON)
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

//bio.city = "Windham";  // add new property
bio["city"] = "Windham";

//var name = "Ron Emrick";
var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.city + ", " + bio.contactInfo.location);
//var formattedLocation = HTMLlocation.replace("%data%", bio.city);

//$("#main").append(bio.city);

$("#header").prepend(formattedLocation);
$("#header").prepend(formattedGitHub);
$("#header").prepend(formattedTwitter);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Declared using Object Dot Notation
var work = {};
work.title = "Software Developer";
work.employer = "Wasabi Ventures, LLC";
work.numYears = 2;
work.city = "Manchester, NH";

$("#main").append(work["title"]);

// Declared using Object Bracket Notation
var education = {};
education["schoolName"] = "Central CT State University";
education["yearsAttended"] = "1986-1990";
education["city"] = "New Britain, CT";

$("#main").append(education.schoolName);

// Declared using Object Literal Notation (JSON)
var education2 = {
	"schools" : [
		{
			"name" : "Central Connecticut State University",
			"location" : "New Britain, CT",
			"degree" : "Bachelor of Science",
			"majors" : ["Computer Science"],
			"minors" : ["Mathematics"],
			"dates" : 1990,
			"url" : "http://www.ccsu.edu/"
		},
		{
			"name" : "MIT",
			"location" : "Cambridge, MA",
			"degree" : "Master of Science",
			"majors" : ["Computer Science"],
			"dates" : 1992,
			"url" : "http://www.mit.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Syntax",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "http://www.Udacity.com/course/ud804"

		}
	]
}




