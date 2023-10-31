// Khai báo biến ngôn ngữ hiện tại
var currentLanguage = "vi-en";

// Hàm thay đổi ngôn ngữ
function changeLanguage() {
    currentLanguage = document.getElementById("language").value;
    if (currentLanguage === "en-vi") {
        window.location.href = "index.html";
    }
}

// Hàm viết hoa chữ cái đầu tiên
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Hàm tra cứu từ
function lookup() {
    var word = document.getElementById("word").value; // Lấy từ nhập vào
    var lowerCaseWord = word.toLowerCase(); // Chuyển từ nhập vào thành chữ thường
    var capitalizedWord = capitalizeFirstLetter(lowerCaseWord); // Chuyển chữ cái đầu tiên thành chữ hoa
    var output = document.getElementById("output");
    
    if (dictionary[word]) {
        output.innerHTML = "Phiên âm: /" + dictionary[word].pronunciation + "/ <button onclick='speak(\"" + dictionary[word].meaning + "\")'>Đọc</button><br>" +
                           "Từ Vựng: " + dictionary[word].meaning;
    } else if (dictionary[lowerCaseWord]) {
        output.innerHTML = "Phiên âm: /" + dictionary[lowerCaseWord].pronunciation + "/ <button onclick='speak(\"" + dictionary[lowerCaseWord].meaning + "\")'>Đọc</button><br>" +
                           "Từ Vựng: " + dictionary[lowerCaseWord].meaning;
    } else if (dictionary[capitalizedWord]) {
        output.innerHTML = "Phiên âm: /" + dictionary[capitalizedWord].pronunciation + "/ <button onclick='speak(\"" + dictionary[capitalizedWord].meaning + "\")'>Đọc</button><br>" +
                           "Từ Vựng: " + dictionary[capitalizedWord].meaning;
    } else {
        output.innerHTML = "Không tìm thấy từ trong từ điển.";
    }
}

// Hàm phát âm từ
function speak(word) {
    // Tạo một thể hiện mới của SpeechSynthesisUtterance
    var utterance = new SpeechSynthesisUtterance(word);
    
    // Đặt ngôn ngữ
    utterance.lang = 'en-US';
    
    // Phát âm từ
    window.speechSynthesis.speak(utterance);
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