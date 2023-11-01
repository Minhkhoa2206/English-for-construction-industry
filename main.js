function lookup() {
    var word = document.getElementById("word").value.toLowerCase(); // Convert the input word to lowercase
    var output = document.getElementById("output");
    
    // Convert each word in the dictionary to lowercase for the comparison
    for (var key in dictionary) {
        if (key.toLowerCase() === word) {
            output.innerHTML = "Pronunciation: /" + dictionary[key].pronunciation + "/ ";
            output.innerHTML += "<button id='speak' class='speak-button'>Đọc</button><br>";
            output.innerHTML += "Meaning Vietnamese: " + dictionary[key].meaning;

            var speakButton = document.getElementById("speak");
            speakButton.onclick = function() {
                // Create a new speech synthesis utterance for the English word
                var utterance = new SpeechSynthesisUtterance(word);

                // Set the language to English
                utterance.lang = 'en-US';

                // Get the list of voices available
                var voices = window.speechSynthesis.getVoices();

                // Filter for female voices and set the voice for the utterance
                var femaleVoices = voices.filter(function(voice) { return voice.gender === 'female'; });
                if (femaleVoices.length > 0) {
                    utterance.voice = femaleVoices[0];
                }

                // Speak the utterance
                window.speechSynthesis.speak(utterance);
            }
            return;
        }
    }

    output.innerHTML = "Word not found in dictionary.";
}

// Get the input field
var input = document.getElementById("word");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Get the current value of the input field
  var word = input.value.toLowerCase();

  // Clear the suggestion box
  var suggestionBox = document.getElementById("suggestionBox");
  suggestionBox.innerHTML = "";

  // Check each word in the dictionary
  for (var key in dictionary) {
    // If the word starts with the input value
    if (key.toLowerCase().startsWith(word)) {
      // Create a new suggestion button
      var btn = document.createElement("BUTTON");
      btn.innerHTML = key;
      btn.onclick = function() {
        // When the button is clicked, update the input field with this word and lookup
        input.value = this.innerHTML;
        lookup();
      }

      // Add the button to the suggestion box
      suggestionBox.appendChild(btn);
    }

    // Stop suggesting words after finding 10 matches
    if (suggestionBox.childNodes.length >= 10) {
      break;
    }
  }
});
