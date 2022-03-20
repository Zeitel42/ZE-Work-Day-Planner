

// global variables

var tasks;
var newTasks;
var saveBtn;

//moment.js

var currentHour = moment().format("HH");
var workHour = moment().startOf('day').add(7, "hour");
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// function with for loop to create timeblocks with textarea and save button

var dayHours = function(){

// get and parse stored data or create a new empty object

    var timeMap = JSON.parse(localStorage.getItem("timeMap")) || {};

// loop to create all timeblocks 

    for(var i = 8; i < 17; i++){
        var workDay = workHour.add(1, "hour").format("h A");

 //  update timeblock textarea with stored data or null 
        var key = "hour" + i;
        timeMap[key] = timeMap[key] || null;

        var row = $("<div></div>").addClass("row time-block");
        var hour = $("<div></div>").addClass("col-1 hour");
        var textInputEl = $("<textarea></textarea>").addClass("col-10 textInputClass").val(timeMap[key]);
        var saveBtn = $("<button></button>").addClass("col-1 fa fa-save saveBtn").attr("key", key);

        $(".container").append(row);
        $(row).append(hour,textInputEl,saveBtn);

        $(hour).text(workDay);

//  change css class when conditions are met
        if(i < currentHour){
            $(textInputEl).attr("class", "col-10 row past")
        }else if(i > currentHour){
            $(textInputEl).attr("class", "col-10 row future")
        }else{
            $(textInputEl).attr("class", "col-10 row present")
        }
     }
// click handler 
     $('.saveBtn').click(function(){

        var newKey = $(this).attr("key");
        console.log(newKey);

        var textArea = $(this).parent().children("textarea").val();
        timeMap[newKey] = textArea;
        console.log(timeMap);
        window.localStorage.setItem('timeMap', JSON.stringify(timeMap));
        // timeMap[key] = txt.val();
        console.log(textArea);
        // console.log(timeMap[key]);
    });
   
}
dayHours();

