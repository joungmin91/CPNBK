<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Regsuachua.aspx.cs" Inherits="ITLab.WebForm1" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	Apps-Đăng ký sửa chữa thiết bị
</title>

    <script src="js/jquery.js"></script>
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/reset.css" rel="stylesheet" />
    <link href="css/bootstrap-theme.css" rel="stylesheet" />
    <link href="js/jquery-ui.css" rel="stylesheet" />
    <link href="css/mainstyle.css" rel="stylesheet" />
    <link href="css/Bootstrap_Fix.css" rel="stylesheet" />
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
</head>
<body>
    <form method="post" action="./" id="form2">
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">Đăng ký sửa chữa thiết bị.</a>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="Div1" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                       <%-- <li>Chào<%=Session["ErrUser"].ToString()%></li>--%>
                         <li><a href="#">Chào: <%=Session["ErrUser"].ToString()%></a></li>
                         <li><a href="Lichsugiaovien.aspx">Lịch sử</a></li>
                         <li><a href="Login.aspx">Thoát</a></li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
            <!--/.container-fluid -->
        </nav>
        <div class="container fixWidth">
          
    <div class="divDiveder10"></div>
    <div class="text-justify">
        <div id="Buoc1">
            <h3>Bước 1: Bạn muốn đăng ký loại sửa chữa nào?
            </h3>
            <div class="divDiveder10"></div>
            <div class="row">
                <div class="col-lg-11 col-lg-offset-1">
                    <ol>
                        <li>Báo mất thiết bị </li>
                        <li>Báo hỏng thiết bị</li>
                        <li>Giải quyết sự cố. </li>
                        
                    </ol>
                </div>
            </div>
            <div class="divDiveder10"></div>
            <div class="row">
                <div class="col-lg-11 col-lg-offset-1">
                    <span class="Bold">Mời bạn chọn:</span>
                    <form id="Form1" runat="server">
                   <asp:DropDownList id="ContentPlaceHolder1_ddlLoaiDK"   runat="server" style="font-size:17px;" 
                        Width="151px">
                 
                   </asp:DropDownList> </form>

	


                    &nbsp;&nbsp;&nbsp;&nbsp; <a class="btn btn-sm btn-primary" onclick="LoadRegister()" title="tiếp tục" href="javascript:void(0)">Bước kế tiếp</a>
               
                </div>
            </div>
            <div class="row text-danger Bold">
                <div class="col-lg-11 col-lg-offset-1">
                    
          
                </div>
            </div>
        </div>
        <div style="display: none;" id="Buoc2" class="Hide">
            <h3>Bước 2: Những điều khoản bắt buộc giáo viên phải chấp hành khi thực hiện đăng ký
            sửa chữa các loại thiết bị sử dụng online:</h3>
            <div class="divDiveder10"></div>
            <div class="row">
                <div class="col-lg-11 col-lg-offset-1">
                    <ol>
                        <li>Giáo viên có trách nhiệm bảo vệ tài sản của mình khi sử dụng các thiết bị mà nhà
                trường cung cấp.</li>
                        <li>Giáo viên phải chịu trách nhiệm về những mẫu đăng ký online của mình. Trong trường
                hợp phát hiện giáo viên có hành vi cố tình phá hoại nhà trường sẽ có quyết định
                kỷ luật với mức kỷ luật tương ứng với hành vi vi phạm.</li>
                        <li>Sau khi đăng ký xong, giáo viên có trách nhiệm theo dõi quá trình xử lý, nếu có
                thông báo quá trình xử lý đã xong, giáo viên có thể liên hệ với đơn vị với BGH nhà trường.</li>
                       
                        <li>Giáo viên có quyền phản ánh lại với đơn vị liên quan trong trường hợp những đăng
                ký của mình không được giải quyết hoặc chậm trễ trong việc giải quyết. Mọi thắc
                mắc xin vui lòng vào địa chỉ để gửi phản hồi đến đơn vị liên quan.</li>

                    </ol>
                </div>
            </div>
            <div class="divDiveder10"></div>
            <h3>Các đơn vị giải quyết các loại thiết bị sử dụng.
            </h3>
            <div class="divDiveder10"></div>
            <div class="row">
                <div class="col-lg-11 col-lg-offset-1">
                    <ul>
                        <li><strong>Phòng BGH </strong>: Tiếp <em> nhận các trường hợp hư hỏng thiết bị.</em>;
               
                        <li><strong>Phòng tin học</strong>: Tiếp nhận yêu cầu <em>giải quyết các vấn đề kỹ thuật.</em>
                         
                    </ul>
                </div>
            </div>
            <div class="divDiveder10"></div>
            <h3>
                <label for="chkAccept">
                    <span>Nếu đồng ý check vào lựa chọn bên cạnh và nhấn bước kế tiếp:</span>
                    <input id="chkAccept" title="chấp nhận" type="checkbox">
                </label>
                &nbsp;&nbsp;&nbsp;<a class="btn btn-sm btn-primary" onclick="LoadStep3()" title="tiếp tục" href="javascript:void(0)"> Bước kế tiếp</a>
            </h3>
        </div>
    </div>

    <div style="display: none;" id="Buoc3" class="Hide">
        <iframe id="ContentFrame" style="border: 0; height: 600px; overflow: hidden;" frameborder="no" width="100%">
            &lt;p&gt;
                Your browser does not support iframes.
            &lt;/p&gt;
        </iframe>
    </div>
    <script type="text/javascript">
        //MainContent_ddlLoaiDK

        function kiem_tra_lua_chon() {
            var iLoai = $("#MainContent_ddlLoaiDK").val();
            return iLoai;
        }
        function LoadRegister() {
            var iLoai = $("#MainContent_ddlLoaiDK").val();

            if (iLoai == 0) {
                alert("Bạn phải chọn loại hình thức báo cáo!");
                return;
            }
            $("#Buoc1").hide();
            $("#Buoc3").hide();
            $("#Buoc2").show();
        }
        function LoadStep3() {
            rs = $('#chkAccept').is(':checked');
            if (rs) {
                ProcessIframe();
            }
            else {
                alert("Bạn đọc kỹ điều khoản và chọn chấp nhận!");
            }
        }
        function ProcessIframe() {
            var iLoai = document.getElementById('ContentPlaceHolder1_ddlLoaiDK').options[document.getElementById('ContentPlaceHolder1_ddlLoaiDK').selectedIndex].value;
            var sUrl;
            if (iLoai > 0) {
                sUrl = "Regthietbi.aspx";
            }

                        $('#ContentFrame').attr('src', sUrl + "?id=" + iLoai);
                        $("#Buoc1").hide();
                        $("#Buoc2").hide();
                        $("#Buoc3").show();
        }
        

        function AcceptCheckbox() {
            $("#chkAccept").attr("checked", "checked");
        }
        $(document).ready(function () {
            $("#Buoc2").hide();
            $("#Buoc3").hide();
        });

    </script>

        </div>
        <div class="divDiveder10"></div>
    </form>


</body></html>