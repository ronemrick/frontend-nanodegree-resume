/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ["Programming", "Teaching", "Javascript", "HTML"];

//
// Declared using Object Literal Notation (JSON)
//
var bio = {
	"name" : "Ron Emrick",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "555-123-4567",
		"email" : "ronemrick@gmail.com",
		"twitter" : "@ronemrick",
		"github" : "ronemrick",
		"location" : "New Hampshire"
	},
	"bioPic" : "images/biophoto.jpg",
	"welcomeMessage" : "Lorem ipsum dolor sit amet, ne etiam dissentias mel, id saepe noster contentiones nam!",
	"skills" : skills
};

//
// Declared using Object Literal Notation (JSON)
//
var work = {
	"jobs" : [
		{
			"employer" : "Wasabi Ventures, LLC",
			"title" : "Director of Engineering Innovation",
			"location" : "Manchester, NH",
			"dates" : "2015-Present",
			"description" : "Lorem ipsum dolor sit amet, ne etiam dissentias mel, id saepe noster contentiones nam"
		},
		{
			"employer" : "ApplyKit, Inc.",
			"title" : "CTO",
			"location" : "Manchester, NH",
			"dates" : "2014",
			"description" : "Lorem ipsum dolor sit amet, ne etiam dissentias mel, id saepe noster contentiones nam"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Cool Project 1",
			"dates" : "2015-Present",
			"description" : "Lorem ipsum dolor sit amet, ne etiam dissentias mel, id saepe noster contentiones nam",
			"images" : ["images/biophoto.jpg", "images/biophoto.jpg"]
		},
		{
			"title" : "Cool Project 2",
			"dates" : "2014",
			"description" : "Lorem ipsum dolor sit amet, ne etiam dissentias mel, id saepe noster contentiones nam",
			"images" : ["images/biophoto.jpg", "images/biophoto.jpg"]
		}
	]
};

projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		// HTMLprojectDates
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		// HTMLprojectDescription
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDesc);

		// HTMLprojectImage
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}

		}
	}

}

projects.display();


// Declared using Object Literal Notation (JSON)
var education = {
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

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork()
{
	for (job in work.jobs) {
		//console.log(work.jobs[job].employer);

		// Create new <div> for work experience
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		// The :last selector selects the last element
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc);
	}
}

displayWork();

$(document).click(function(loc) { 
	//console.log('x location: ' + loc.pageX + '; y location: ' + loc.pageY);
	logClicks(loc.pageX, loc.pageY);
});


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);

	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
};

$('#main').append(internationalizeButton);




