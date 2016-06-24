<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Viewdanhsachkhongxuly.aspx.cs" Inherits="ITLab.admincp.Viewdanhsachkhongxuly" %>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>THCS Nguyễn Bỉnh Khiêm 2015</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Custom Fonts -->
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style type="text/css">
        .style1
        {
            color: #006699;
        }
        .style2
        {
            color: #0066CC;
        }
    </style>

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Quản lý chung</a>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
             <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li class="active">
                        <a href="admincp.aspx"><i class="fa fa-fw fa-dashboard"></i> Thiết bị</a>
                    </li>
                    <li>
                   <a href="LichSuSuaChuaLop.aspx"><i class="fa fa-fw fa-bar-chart-o"></i> Thống kê</a>
                    </li>
                 
                
                    <li>
                        <a href="taskloaisc.aspx"><i class="fa fa-fw fa-table"></i> Loại sửa chữa</a>
                    </li>
                
                    <li>
                       <a href="DanhMucLop.aspx"><i class="fa fa-fw fa-table"></i>Danh Mục Lớp</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            &nbsp;</h1>
                        <ol class="breadcrumb">
                            <li>
                                <i class="fa fa-dashboard"></i>  <a href="admincp.aspx">Trang chủ</a>
                            </li>
                            <li class="active">
                                <i class="fa fa-table"></i> Danh sách không xử lý</li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-12">
                        <h2><span class="style1"><strong>Danh sách không xử lý</strong></span>  <span class="badge badge-blue"><%= Session["Msgkhongthexuly1"].ToString()%></span>  </h2>
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead>
                                           <tr>
                  
                        <th class="style2" >STT</th>
                        <th class="style2" >Lớp</th>
                        <th class="style2" >Giáo viên</th>
                        <th class="style2" >Loại sửa chữa</th>
                        <th class="style2">Nội dung</th>
                        <th class="style2">Ngày đăng ký</th>
                   
 <th class="style2">Chức năng</th>
                       
                                     </tr>
                                      <asp:Repeater ID="Repeater2" runat="server">
                     <ItemTemplate>
                <tr>
                <td><%#Eval("STT")%></td>
                <td><%#Eval("NameClass")%></td>
                <td><%#Eval("ID_TEACHER")%></td>
                <td><%#Eval("LoaiSuaChua")%></td>
                <td><%#Eval("CONNTENT_FIX")%></td>
                <td><%#Eval("_DATE_REG")%></td>
                <%----<td><%#Eval("Discontinued").ToString()=="True" ? "<img src='img/on.gif' />": "<img src='img/off.gif' />"%></td>--%>
             
               <td><a class="btn btn-success" href="viewxulylistdangxl.aspx?idcxl=<%#Eval("ID_CF") %>">Xử lý lại</td>
           <%--     <td><%#Eval("_SYS_Info")%></td>--%>
                </tr>
                </ItemTemplate>
                    </asp:Repeater>
                      </HeaderTemplate>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                  
                </div>
                <!-- /.row -->
                  <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                     <br />
                    <br />
                    <br />
                       <br />
                    <br />
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-6">
                        <h2>                   
                        <p><a target="_blank" href="© 2015 THCS Nguyễn Bỉnh Khiêm">© 2015 THCS Nguyễn Bỉnh Khiêm</a>.</p>
                    </div>
                </div>
                <!-- /.row -->

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>