$(document).ready(function () {
    if ($(".ErrorMessage").text() != '')
        $("#pannelThongBao").fadeIn(1000);

    $('input').keydown(function () {
        if($("#pannelThongBao").is(":visible")) $("#pannelThongBao").fadeOut(500);
    });

    $(".Input").click(function () {
        $('input:first', $(this)).focus();
    });

    $('#CaptchaImage').attr("src", "CaptchaImage.aspx?" + Math.random());

    window.addEventListener('load', function () {
        new FastClick(document.body);
    }, false);
});

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

function Ajax_Call(urlFunc, dataFunc, successFunc, completeFunc) {
    $('.Loading').show();
    $.ajax({
        type: "POST",
        url: urlFunc + '?' + generateUUID(),
        data: dataFunc,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        success: successFunc,
        complete: completeFunc
    });
}

function RSAEncrypt(strEncrypt, PubKey) {
    var rsa = new System.Security.Cryptography.RSACryptoServiceProvider();
    rsa.FromXmlString(PubKey)
    var encryptedString = ""
    var decryptedBytes = System.Text.Encoding.UTF8.GetBytes(strEncrypt)
    var encryptedBytes = rsa.Encrypt(decryptedBytes, false)
    encryptedString = System.Convert.BytesToHexString(encryptedBytes)
    return encryptedString
}