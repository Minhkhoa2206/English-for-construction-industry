function openMenu() {
  var menu = document.getElementById('menu');
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
// Get the ul element
const ul = document.getElementById('fileContent');

// Create a li element for each item in the data array and append it to the ul
let wordCount = 0;
data.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item.replace('::', ':');
  ul.appendChild(li);
  wordCount++;

  // Add click event to read the text
  li.addEventListener('click', function() {
      var englishText = this.textContent.split(':')[0]; // Get English text

      var englishMsg = new SpeechSynthesisUtterance(englishText);
      englishMsg.lang = 'en-US'; // Set language to English

      window.speechSynthesis.speak(englishMsg);
  });
});

// Display the word count in the header
const header = document.getElementById('header');
header.textContent = wordCount + ' từ vựng tiếng Anh chuyên ngành xây dựng';
