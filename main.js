function changeLanguage() {
    var language = document.getElementById("language").value;
    if (language === "vi-en") {
        window.location.href = "index2.html";
    }
}

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
function closeNotice() {
    document.getElementById('notice').style.display = 'none';
  }
function openMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }