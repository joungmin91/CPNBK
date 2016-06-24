<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="huybodangky.aspx.cs" Inherits="ITLab.huybodangky" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
   <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
    <title></title>
    <style type="text/css">
        .style1
        {
            width: 66%;
            font-family: Arial, Helvetica, sans-serif;
        }
        .style2
        {
        }
        .style5
        {
            height: 24px;
        }
        .style17
        {
            height: 24px;
            width: 526px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table cellspacing="1" class="style1">
            <tr>
                <td class="style17">
                     <label for="xacnhan">Nếu bạn chắc chắc hủy đăng ký, vui lòng đánh dấu chọn:</label><asp:CheckBox ID="chkchon" runat="server" />
                </td>
                <td class="style5" colspan="2">
                     <button type="button" runat="server" class="btn btn-primary btn-sm"  onserverclick="btnHuyBo_Click"></span> Đồng ý</button>
                </td>
            </tr>
            <tr>
                <td class="style2" colspan="2">
                    &nbsp;</td>
                <td>
                    <asp:ImageButton ID="ImageButton1" runat="server" Height="20px" 
                        ImageUrl="~/img/arrow_left.png" onclick="ImageButton1_Click" Width="21px" />
                    Quay lại</td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
