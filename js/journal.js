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
