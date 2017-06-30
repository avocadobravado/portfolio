var Doctor = require('./../js/scripts.js').doctorModule;

// var name = function(name) {
//   $('.result').before("<h3>Name: " + name + "</h3>");
// };

var doctorInfo = function(result) {
result.data.forEach(function(doctor) {
    $('.result').append(
    // Doctor name
    "<ul><li><h3>Facility or Doctor's Name:</h3><li>" +
    doctor.practices[0].name +

    // Doctor specialty
    "</li><li><h3>Specializes in:</h3><li>" +
    doctor.specialties[0].actor +

    // Doctor biography
    "</li><h3>Biography:</h3><li>" +
    doctor.profile.bio +
    "</li>" +

    // Doctor location
    // Street address
    "<h3>Location:</h3>" +
    "<li><h4>Street:</h4><li>" +
    doctor.practices[0].visit_address.street +
    "</li>" +

    // City
    "<li><h4>City:</h4><li>" +
    doctor.practices[0].visit_address.city +
    "</li>" +

    // State
    "<li><h4>State:</h4><li>" +
    doctor.practices[0].visit_address.state +
    "</li>" +

    // Zip code
    "<li><h4>Zip code:</h4><li>" +
    doctor.practices[0].visit_address.zip +
    "</li></ul><br>");

    // Clear input for each submit
    // $('.result').text("");
  });

};

$(function() {

  var newDoctor = new Doctor();
  var searchInput;
  // var cityInput;

  $('.search-form').submit(function(e) {
    e.preventDefault();
    searchInput = $('.search-input').val();
    // cityInput = $('.city-input').val();

    // Clear input for every submit
    $(".result").empty();

    newDoctor.getDoctor(searchInput, doctorInfo);
    // console.log(searchInput);
    // console.log(searchInput);

  });
});
