(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a8763f6416c84aefc79a166e10a7bda4";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

var Doctor = function() {
};

Doctor.prototype.getDoctor = function(medicalIssue, displayInfo) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
    displayInfo(result);
    // name(result.data[0].practices[0].name);
    // console.log(result);
    // console.log("Ya did it!");
    // console.log(result.data[0].practices[0].name);
  })
  .fail(function(error){
      console.log("Not working, but it's ok you'll get it <3");
  });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/scripts.js').doctorModule;

var doctorInfo = function(result) {
result.data.forEach(function(doctor) {
    $('.result').append(
    // Doctor name
    "<ul><li><h3>Facility or Doctor's Name:</h3><li>" +
    doctor.practices[0].name +

    // Doctor specialty
    "</li><li><h3>Expertise:</h3><li>" + doctor.specialties[0].description +

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
    "</li>" +

    // Phone
    "<li><h4>Phone number:</h4><li>" +
    doctor.practices[0].phones[0].number +
    "</li></ul><hr>");
  });

};

$(function() {
  var newDoctor = new Doctor();

  $('.search-form').submit(function(e) {
    e.preventDefault();
    var searchInput = $('.search-input').val();

    // Clear input for every submit
    $('.result').empty();
    newDoctor.getDoctor(searchInput, doctorInfo);
  });
});

},{"./../js/scripts.js":2}]},{},[3]);
