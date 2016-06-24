<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Regthietbi.aspx.cs" Inherits="ITLab.Regmaytinh" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
   <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
    <style type="text/css">
        .style1
        {
            width: 123px;
            color: #808080;
        }
        .style2
        {
            height: 21px;
        }
        .style3
        {
            width: 123px;
            height: 35px;
        }
        .style4
        {
            height: 35px;
        }
        .style5
        {
            width: 123px;
            height: 93px;
            color: #808080;
        }
        .style6
        {
            height: 93px;
        }
        .style7
        {
            width: 123px;
            color: #999999;
        }
        .style8
        {
            width: 203px;
        }
        .style9
        {
            height: 93px;
            width: 203px;
        }
        .style10
        {
            height: 35px;
            width: 203px;
        }
    </style>
</head>
<body>

    <form id="form1" runat="server">

<table cellspacing="1" class="nav-justified" align="center" cellpadding="2" 
        style="background-color: #FCFCFC; height: 216px;">
          <tr>
              <td colspan="4" class="style2" 
                  style="color: #FFFFFF; background-color: #006699;">
                  Thông tin đăng ký:</td>
          </tr>
          <tr>
              <td class="style7">
                  Giáo viên</td>
              <td>
                  &nbsp;</td>
              <td class="style8">
                  <%=Session["ErrUser"].ToString()%><br /></td>
              <td>
                  &nbsp;</td>
          </tr>
          <tr>
              <td class="style1">
                  Lớp học:</td>
              <td>
                  &nbsp;</td>
              <td class="style8">
                  <asp:DropDownList ID="DropDownList1" runat="server"  Height="26px" Width="200
                  px">
                    
                  </asp:DropDownList>
              </td>
              <td>
                  &nbsp;</td>
          </tr>
          <tr>
              <td class="style5">
                  Nội dung:</td>
              <td class="style6">
                  &nbsp;</td>
              <td class="style9">
                  <asp:TextBox ID="txtComments" Runat="server" Height="72px" TextMode="MultiLine" 
                      Width="286px" />
              </td>
              <td class="style6">
                  </td>
          </tr>
          <tr>
              <td class="style3">
                  </td>
              <td class="style4">
                  &nbsp;</td>
              <td class="style10">
                  <button id="updateButton" runat="server" class="btn btn-success btn-bg-primary" 
                      onserverclick="btnSumbit_Click" type="button">
                    Đăng ký
                  </button>
              </td>
              <td class="style4">
                  </td>
          </tr>
      </table>


    </form>


</body>
</html>
