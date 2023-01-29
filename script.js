$(document).ready(function() {

    var currentDateEl = $('#currentDay');
    //variable to store current hour in 24hr format
    // var currentHour = moment().format('k');

    //adds today's date to currentDay p tag in html
    function displayDate(){
        var todaysDate = moment().format('dddd Do MMMM YYYY');
        currentDateEl.text(todaysDate);
    }

    //call function to display date
    displayDate();

});

