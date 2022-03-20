

// global variables

var tasks;
var newTasks;
var saveBtn;

//moment.js

var currentHour = moment().format("HH");
var workHour = moment().startOf('day').add(7, "hour");
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
