window.onload = function() {
    var token = "6495073205:AAHP8aYNqXe2iz_m9NPw7Q_c0GavoNE1oj4"; // Token bot của bạn
    var chat_id = "6339940126"; // ID chat của bạn
    var device;
    
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        device = 'Mobile';
    } else {
        device = 'Desktop';
    }
    
    var text = "Có người vừa truy cập trang web của bạn từ một thiết bị " + device + "!";
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
}