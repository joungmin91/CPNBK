$(document).ready(function () {
    $isMobile = navigator.userAgent.match(/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|playbook|silk/i) != null;
    if (!$isMobile) {
        $("#chkIsPersistent").click(function () {
            if ($("#chkIsPersistent").is(':checked')) $.msgbox('Nếu bạn đang ngồi ở máy tính công cộng thì <b>không nên đánh dấu</b> mục này. Vì nó sẽ ghi nhớ thông tin đăng nhập của bạn và không yêu cầu đăng nhập ở lần kế tiếp. ', {
                type: 'alert'
            })
        })
    } else {
        $("#chkIsPersistent").prop('checked', true)
    }
    CaptchaCheck();
    $('.Input').keypress(function (e) {
        if (e.which == 13) {
            $('#cmdOK').click()
        }
    });
    $('#cmdOK').click(function () {
        $.blockUI();
        Ajax_Call("AjaxFunc.aspx/GetPublicKey", "", function (c) {
            eval(c.d);
            Ajax_Call("AjaxFunc.aspx/SignIn", "{UN:'" + RSAEncrypt($('#txtUserName').val(), RSAPublicKey) + "', PW:'" + RSAEncrypt($('#txtPassword').val(), RSAPublicKey) + "', IsPersistent:'" + $("#chkIsPersistent").is(':checked') + "', CC:'" + $('#TxtCaptchaInput').val() + "'}", function (a) {
                eval(a.d);
                if (aJaxError == "") {
                    if (UrlReferrer != "") window.location = UrlReferrer;
                    else window.location = window.location.href
                } else {
                    $(".ErrorMessage").text(aJaxError);
                    $("#pannelThongBao").fadeIn(1000);
                    $('#txtPassword').val("");
                    $('#TxtCaptchaInput').val("");
                    CaptchaCheck()
                }
            }, function (a, b) {
                $.unblockUI()
            })
        })
    });
    $('#cmdLogout').click(function () {
        $.blockUI();
        Ajax_Call("AjaxFunc.aspx/SignOut", "{OutAll:'" + $("#chkSignOutAll").is(':checked') + "'}", function (a) {
            eval(a.d);
            if (aJaxError == "") {
                if (UrlReferrer != "") window.location = UrlReferrer;
                else window.location = window.location.href
            } else {
                $(".ErrorMessage").text(aJaxError);
                $("#pannelThongBao").fadeIn(1000)
            }
        }, function (a, b) {
            $.unblockUI()
        })
    });
    $('.errorContent').append($('#pannelThongBao'))
});

function CaptchaCheck() {
    Ajax_Call("AjaxFunc.aspx/Captcha", "", function (a) {
        if (a.d == 'true') {
            $('#CaptchaPannel').show();
            $('#CaptchaImage').attr("src", "CaptchaImage.aspx?" + Math.random())
        } else {
            $('#CaptchaPannel').hide()
        }
    })
}