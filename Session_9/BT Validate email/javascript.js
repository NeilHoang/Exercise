    function email(str) {
        regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        if (regexp .test(str)) {
            return true;
        }
        return false;
    }

function CheckEmail() {
    let txt_mail = document.getElementById('demo').value;
    alert(email(txt_mail));
}