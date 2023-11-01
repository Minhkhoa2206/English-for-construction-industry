// Hàm để tính khoảng cách Levenshtein giữa hai chuỗi
function levenshteinDistance(a, b) {
    var matrix = [];
    var i, j;
  
    for (i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
  
    for (j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
  
    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i-1) == a.charAt(j-1)) {
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, Math.min(matrix[i][j-1] + 1, matrix[i-1][j] + 1));
        }
      }
    }
  
    return matrix[b.length][a.length];
  };
  
  // Hàm để lấy ra 5 từ gợi ý dựa trên từ đang nhập
function getSuggestions(input) {
    // Lấy ra danh sách các từ từ 'dictionary'
    var words = Object.keys(dictionary);
  
    return words
      .map(word => ({word: word, distance: levenshteinDistance(input.toLowerCase(), word.toLowerCase())}))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5)
      .map(item => item.word);
  }
  
  function showSuggestions(input) {
    // Gọi hàm getSuggestions để lấy ra các từ gợi ý
    var suggestions = getSuggestions(input);
  
    // Lấy ra phần tử 'suggestions' từ DOM
    var suggestionsElement = document.getElementById('suggestions');
  
    // Xóa các từ gợi ý cũ
    suggestionsElement.innerHTML = '';
  
    // Thêm các từ gợi ý mới vào phần tử 'suggestions'
    for (var i = 0; i < suggestions.length; i++) {
      var suggestionElement = document.createElement('div');
      suggestionElement.textContent = suggestions[i];
      suggestionElement.onclick = function() {
        document.getElementById('word').value = this.textContent;
        lookup(); // Gọi hàm lookup() ngay sau khi từ gợi ý được chọn
      }
      suggestionsElement.appendChild(suggestionElement);
    }
  }
  