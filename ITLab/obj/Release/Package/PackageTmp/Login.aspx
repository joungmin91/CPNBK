﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="ITLab.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="cph_noidung" runat="server">

      <br>
        <div id="ctl00_ContentPlaceHolder_divLogin">
            <span class="Label">Tên đăng nhập</span><div class="Input">
                <asp:TextBox id="txtUserName"  tabindex="1" autocomplete="off"  runat="server" 
                    Height="21px" Width="211px"></asp:TextBox></div>
            <span class="Label">Mật khẩu</span><div class="Input">
                <asp:TextBox id="txtPassword" tabindex="1" autocomplete="off"  runat="server" TextMode="Password"></asp:TextBox>
                </div>
            <div id="CaptchaPannel" style="display: none;">
                <span class="Label">Nhập ký tự bên dưới</span>
                <div class="Input"><input id="TxtCaptchaInput" tabindex="3" autocomplete="off" type="text"></div>
                <img src="%C4%90%C4%83ng%20nh%E1%BA%ADp%20-%20L%E1%BA%A1c%20H%E1%BB%93ng_files/CaptchaImage.png" alt="" style=" width: 100%; height: 40px;" id="CaptchaImage">
            </div>
            <div>
                <input id="chkIsPersistent" name="chkIsPersistent" type="checkbox">
                <label for="chkIsPersistent" class="dataRow">Giữ trạng thái kết nối</label>
            </div>
            <div class="errorContent"><div id="pannelThongBao" class="errorNote">
            <span id="ctl00_ContentPlaceHolder_lbThongBao" class="ErrorMessage"></span>
        </div>
              
                <asp:Button ID="cmdLogin" class="Button" runat="server" Text="OK" Width="221px" 
                    onclick="cmdLogin_Click" Height="35px" />
              
            </div>
            <br>
            <div class="dataRow Label-small">
                <a id="lbQuenMatKhau" href="#">Tôi không thể đăng nhập được ? &nbsp;</a>
                <br><br>
                <a href="#">Bạn muốn đổi mật khẩu ? &nbsp;</a>
            </div>
        </div>
</asp:Content>
