$(document).ready(function() {

    var currentDateEl = $('#currentDay');
    //variable to store current hour in 24hr format
    var currentHour = moment().format('k');

    console.log(currentHour);

    //adds today's date to currentDay p tag in html
    currentDateEl.text(moment().format('dddd Do MMMM, YYYY'));

});

