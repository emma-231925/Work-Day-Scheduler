$(document).ready(function() {

    var currentDateEl = $('#currentDay');
    var saveBtnEl = $('.saveBtn');
    var textInputEl = $('.textInput');

    //adds today's date to currentDay p tag in html
    function displayDate(){
        var todaysDate = moment().format('dddd Do MMMM YYYY');
        currentDateEl.text(todaysDate);
    }

    //call function to display date
    displayDate();

    //function for when save button is clicked
    saveBtnEl.click(function(){
        //siblings of the button with class textInput and assigns empty value
        var textAreaValue = $(this).siblings('.textInput').val();
        //button's parent id
        var timeHour = $(this).parent().attr('id');
        //stores variables to local storage
        localStorage.setItem(timeHour, textAreaValue);
    });

    //function for keeping text value on refresh
    textInputEl.each(function() {
        //textInputs parent's id
        var timeHour = $(this).parent().attr('id');
        //gets event details from local storage
        var eventDetail = localStorage.getItem(timeHour);
        //if there is an event, set textarea to that value
        if (eventDetail) {
            $(this).val(eventDetail);
        }
    });

    //loops through eventBlockEl
    textInputEl.each(function() {
        //timeBlock stores the id as an int, currentHour stores the current hour in 24hr format
        var timeBlock = parseInt($(this).parent().attr('id'));
        var currentHour = moment().format('k');

        //compares current time to timeBlock and assigns/removes classes
        if (timeBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (timeBlock == currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    });

});