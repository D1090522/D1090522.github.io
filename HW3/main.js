function showNo() {
    alert("沒有條款");
}
function NoPrivacy() {
    alert("你沒有隱私權");
}
function validateForm() {
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (username === '' || password === '') {
        alert('請輸入帳號密碼');
        return false;
    }
    else {
        alert("還想登入阿，謝謝你送我帳號");
    }
}
function forgetPassword() {
    alert("還敢忘記密碼啊!!!");
}
function newMember() {
    alert("沒帳號就別登了");
}
function noProblem() {
    alert("你沒有問題，有問題看醫生");
}
function service() {
    alert("客服很忙，沒時間幫你服務");
}