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
