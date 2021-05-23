var today = moment();
    $('#currentDay').text(today.format('MMMM Do, YYYY, h:mm a'));
    
$(".saveBtn").on('click', function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text)
   

 });   

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))


 function clock() {
    const  currentHour = today.hour();
    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id"));
        console.log(hour, currentHour)

        if (currentHour === hour) {
        $(this).addClass("present")
        } 
        
        else if (currentHour > hour) {
        $(this).addClass("past")
        } 
        
        else {
        $(this).addClass("future")
        }
        })
    }



clock();