
<%@ Register assembly="DevExpress.Web.v14.1, Version=14.1.6.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxEditors" tagprefix="dx" %>
<%--Update 1 10/1/2016 8PM  Thêm vài tính năng cho lịch sử giáo viên biết lịch sửa chữa từng lớp, vẫn không biết ngày đăng ký có nên để hay không?--%><%--Update 2 11/1/2016 9AM Hoàn thành bản nội dung cho danh sách lịch sử. nhưng lay hoay với store . Y tưởng cho rằng mã lớp học, giáo viên chung 1 bảng:(--%><%--Update 3 11/1/2016 9PM vẫn đang desgin giao diện , combobox button. Nhưng Size Button đang gặp phải là gì ?. Button nhỏ với thiết kế. Nghĩ là trong tag div , sẽ fix lại sau.--%>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Lichsugiaovien.aspx.cs" Inherits="ITLab.WebForm2" %>


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
    <style type="text/css">
        .style1
        {
            width: 93px;
            height: 50px;
        }
        .style2
        {
            width: 269px;
            height: 50px;
        }
        .style3
        {
            height: 50px;
        }
    </style>
</head>
<body>
     <form id="form1" runat="server">
     <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">Đăng ký sửa chữa</a>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#">Lịch sử</a></li>
                        <li><a href="Regsuachua.aspx">Đăng ký</a></li>
                        <li><a href="Login.aspx">Thoát</a></li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
            <!--/.container-fluid -->
        </nav>
     <div class="container fixWidth">
            <div>    
            </br>
                <table cellpadding="0" cellspacing="0" class="nav-justified">
                    <tr>
                        <td class="style1">
           Chọn ngày: 
                        </td>
                        <td class="style2">
                            <dx:ASPxDateEdit ID="_dateedit" runat="server" Height="16px" Theme="Glass" 
                                Width="245px" EditFormat="Custom" EditFormatString="dd/MM/yyyy">
            </dx:ASPxDateEdit>
                        </td>
                        <td class="style3">
                  <button id="updateButton" runat="server" class="btn btn-success btn-bg-bg-success" 
                      onserverclick="cmdXem_Click" type="button">
                   Xem
                  </button>
    
                        </td>
                    </tr>
                </table>
                <br />
            </div> </div>
        
    <div class="container-fluid">
        
                <div class="table-responsive">
                <div>Lịch sử sửa chữa</div>
  <table class="table" 
              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; ">
    <thead>
     
      <tr>
        <th >STT</th>
        <th >Giáo viên</th>
         <th >Phòng</th>
        <th >Loại sửa chữa</th>
          <th>Nội dung</th>
             <th>Nội dung sửa chữa</th>
          <th>Ngày đăng ký</th>
          <th>Đăng ký</th>
          <th>Tình trạng</th>
      </tr>
                    <asp:Repeater ID="Repeater2" runat="server">
                     <ItemTemplate>
                <tr>
                <td><%#Eval("STT")%></td>
                <td><%#Eval("ID_TEACHER")%></td>
                <td><%#Eval("LOP")%></td>
                <td><%#Eval("LoaiSuaChua")%></td>
                <td><%#Eval("CONNTENT_FIX")%></td>
                   <td><%#Eval("NoiDungSuaChua")%></td>
                <td><%#Eval("_DATE_REG")%></td>
                <%----<td><%#Eval("Discontinued").ToString()=="True" ? "<img src='img/on.gif' />": "<img src='img/off.gif' />"%></td>--%>
                <td><%#Eval("_SYS").ToString() == "0" ? "đã đăng ký" : ""%></a></td>
                <td><%#Eval("_SYS_Info")%></td>
                </tr>
                </ItemTemplate>
                    </asp:Repeater>

       </HeaderTemplate>
    </thead>
  </table>




                </div>
            
    </div>


     </form>


</body></html>