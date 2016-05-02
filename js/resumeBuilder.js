/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Ron");

//var awesomeThoughts = "I am Ron and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN!");
//$("#main").append(funThoughts);

var name = "Ron Emrick";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

