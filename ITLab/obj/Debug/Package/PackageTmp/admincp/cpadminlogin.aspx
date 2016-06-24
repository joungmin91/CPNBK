<%@ Page EnableViewStateMac="false" Language="C#" AutoEventWireup="true" CodeBehind="cpadminlogin.aspx.cs" Inherits="ITLab.admincp.cpadminlogin" %>

<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>ĐĂNG NHẬP QUẢN TRỊ</title>
    
    
    
    
        <link rel="stylesheet" href="css/style.css">

    
    
    
  </head>

  <body>

    <!--Google Font - Work Sans-->
<link href='https://fonts.googleapis.com/css?family=Work+Sans:400,300,700' rel='stylesheet' type='text/css'>

<div class="container">
  <div class="profile">
    <button class="profile__avatar" id="toggleProfile">
        <img src="../img/logo.png" alt="Avatar" /> 
    </button>
    <div class="profile__form" >
      <div class="profile__fields" >
        <form id="frm1" runat="server">
        <div class="field">
      
            <input ID="fieldUser" runat="server"  class="input"  required pattern=.*\S.* >
      
          <label for="fieldUser" class="label">Tài khoản</label>
        </div>
        <div class="field">
          <input type="password" id="fieldPassword"  runat="server" class="input" required pattern=.*\S.* />
          <label for="fieldPassword" class="label">Mật Khẩu</label>
        </div>
        <div class="profile__footer" >
        <button id="updateButton" runat="server" class="btn" 
                      onserverclick="btnShow_Click" type="Button">
                    ĐĂNG NHẬP
                  </button>
        </div>
      
      </div>
       </form>
     </div>
  </div>
</div>
    
        <script src="js/index.js"></script>

    
    
    
  </body>
</html>

