var today = moment();
    $('#currentDay').text(today.format('MMMM Do, YYYY, h:mm a'));
// This assigns the Current Day's text to be the current time in May 23rd, 2021, 9:22 PM format.
$(".saveBtn").on('click', function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
// Upon the click of the save button, the input in the text area will be saved to the Local Storage based off the time block it was submitted in 
    localStorage.setItem(time, text)
   

 });   
// The following lines of code checks the Local Storage for each item and if there is something, it places the saved data in the corresponding time-block
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

// The following function checks the time of the day and compares it to each time block. 
 function clock() {
    const  currentHour = today.hour();
    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id"));
        console.log(hour, currentHour)
// if the time block matches the hour of day you are currently on, it changes the color of the time block to red. 
        if (currentHour === hour) {
        $(this).addClass("present")
        } 
// if the time block is less than the current hour, or it already happened in the day, the time block changes to grey
        else if (currentHour > hour) {
        $(this).addClass("past")
        } 
// if the time block is more than the current hour, or hasn't happened yet, it is green. 
        else {
        $(this).addClass("future")
        }
        })
    }



clock();