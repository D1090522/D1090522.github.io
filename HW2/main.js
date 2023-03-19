var seconds = 30;

// 取得倒數計時元素
var countdownElement = document.getElementById("countdown");

// 開始倒數計時
var countdownInterval = setInterval(function() {
    seconds--;
    countdownElement.innerText = seconds;

    // 如果倒數時間結束，則重置頁面
    if (seconds == 0) {
        clearInterval(countdownInterval);
        location.reload();
    }
}, 1000);

function redirectToMomo() {
    location.href = 'https://www.momoshop.com.tw/';
}