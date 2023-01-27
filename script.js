var currentDateEl = $('#currentDay');

//adds current date to currentDay p tag in html
currentDateEl.text(moment().format('dddd Do MMMM, YYYY'));
