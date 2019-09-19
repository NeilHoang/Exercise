function account(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}

function CheckAccount() {
    let txt_account =document.getElementById('demo').value;
    alert(account(txt_account));

}