<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Historyreg.aspx.cs" Inherits="ITLab.Historyreg" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head id="Head1" runat="server">
   <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
</head>
    <title></title>
    <style type="text/css">
    </style>

<body>
    <form id="form1" runat="server">
    <div>
     
    <div class="panel panel-default">
      <div class="panel-heading">Lịch sử sửa chữa:</div>
      <div class="container">
  <table class="table" 
              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; ">
    <thead>
     
      <tr>
        <th >STT</th>
        <th >Giáo viên</th>
        <th >Loại sửa chữa</th>
          <th>Nội dung</th>
          <th>Ngày đăng ký</th>
          <th>Đăng ký</th>
          <th>Tình trạng</th>
      </tr>
                    <asp:Repeater ID="Repeater2" runat="server">
                     <ItemTemplate>
                <tr>
                <td><%#Eval("STT")%></td>
                <td><%#Eval("ID_TEACHER")%></td>
                <td><%#Eval("LoaiSuaChua")%></td>
                <td><%#Eval("CONNTENT_FIX")%></td>
                <td><%#Eval("_DATE_REG")%></td>
                <%----<td><%#Eval("Discontinued").ToString()=="True" ? "<img src='img/on.gif' />": "<img src='img/off.gif' />"%></td>--%>
                <td><a href="huybodangky.aspx?idhuydangky=<%#Eval("ID_CF") %>"><%#Eval("_SYS").ToString() == "0" ? "Hủy đăng ký" : ""%></a></td>
                <td><%#Eval("_SYS_Info")%></td>
                </tr>
                </ItemTemplate>
                    </asp:Repeater>

       </HeaderTemplate>
    </thead>
  </table>




    </div>
    </div>
    </div>
    </form>
 
</body>
</html>
