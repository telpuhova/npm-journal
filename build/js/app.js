(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.getWordCount = function () {
  return this.body.length;
};

Entry.prototype.getVowelAndConsonantCount = function () {
  var letters = this.body.split("");
  var vowels = "aeyuoi";
  var vowelCount = 0;
  for (var i=0; i<letters.length; i++) {
    if (vowels.includes(letters[i])) {
      vowelCount++;
    }
  }
  consonantCount = body.length - vowelCount;
  return [vowelCount, consonantCount]
};

Entry.prototype.getTeaser = function () {
  // debugger;
  var words = this.body.split(" ");
  var result = "";

  for (var i=0; i<words.length; i++) {
    if (words[i].endsWith(".") || (i >= 8)) {
      result = result.concat(words[i] + " ");
      return result;
    } else {
      result = result.concat(words[i] + " ");
    }
  }
  return result;
};

exports.journalModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require("./../js/journal.js").journalModule;

$(document).ready(function() {
  $("#result").hide()
  $("#submit-entry").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);

    var words = entry.getWordCount();
    var vowels = entry.getVowelAndConsonantCount()[0];
    var teaser = entry.getTeaser();

    $("#words").text(words);
    $("#vowels").text(vowels);
    $("#teaser").text(teaser);
    $("#result").show()

  });
});

},{"./../js/journal.js":1}]},{},[2]);
