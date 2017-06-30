(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b60c3d130d80a987f4d5581b0920fdac";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

var Beer = function() {
};

Beer.prototype.getAbv = function(searchInput, name, abv, ibu, organic, category, description, abvMin, abvMax) {
  $.get("http://api.brewerydb.com/v2/beers/?name=" + searchInput + "&description&key=" + apiKey).then(function(response) {

    //////////////////////////////////////////
    // If isOrganic is undefined, display N/A
    //////////////////////////////////////////

    if (JSON.stringify(response.data[0].isOrganic) === undefined) {
      response.data[0].isOrganic = "N/A";
    }

    //  If IBU is undefined, display N/A
    if (JSON.stringify(response.data[0].ibu) === undefined) {
      response.data[0].ibu = "N/A";
    }

    // If no image, display 'Image coming soon'
    // if (response.data[0].hasOwnProperty('labels') === false) {
    //   photo = "Image coming soon";
    // } else {
    //   // image = response.data[0].labels.medium;
    //   photo = '<img src="' + response.data[0].labels.medium + '">';
    // }

    //////////////////////////////////////////
    // Gather info from API
    //////////////////////////////////////////
      name(response.data[0].name);
      abv(response.data[0].abv);
      ibu(response.data[0].ibu);
      organic(response.data[0].isOrganic);
      category(response.data[0].style.category.name);
      description(response.data[0].style.description);
  });
};

  //   console.log(JSON.stringify(response));

exports.beerModule = Beer;

},{"./../.env":1}],3:[function(require,module,exports){
var Beer = require('./../js/scripts.js').beerModule;

var name = function(name) {
  $('.result').before("<h3>Name: " + name + "</h3>");
};

var abv = function(abv) {
  $('.result').before("<p><strong>ABV: </strong>" + abv + "%</p>");
};

var ibu = function(ibu) {
  $('.result').before("<p><strong>IBU: </strong>" + ibu + "</p>");
};

var organic = function(organic) {
  $('.result').before("<p><strong>Organic:</strong> " + organic + "</p>");
};

var category = function(category) {
  $('.result').before("<h3>Category: " + category + "</h3><br>");
};

var description = function(description) {
  $('.result').before("<h3>Description:</h3><p>" + description + "</h3>");
};

var abvMin = function(abvMin) {
  $('.result').before("<p><strong>ABV Range: </strong>" + abvMin + "-");
};

var abvMax = function(abvMax) {
  $('.result').before(abvMax + "</p>");
};

$(function() {

  var newBeer = new Beer();
  var searchInput;

  $('.search-form').submit(function(e) {
    e.preventDefault();
    searchInput = $('.search-input').val();

    newBeer.getAbv(searchInput, name, abv, ibu, organic, category, description);
    console.log(searchInput);

  });
});

},{"./../js/scripts.js":2}]},{},[3]);
