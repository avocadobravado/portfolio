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
