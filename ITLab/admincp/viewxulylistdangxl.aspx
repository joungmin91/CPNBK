<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="viewxulylistdangxl.aspx.cs" Inherits="ITLab.admincp.viewxulylistdangxl" %>
<!DOCTYPE html>
<style type="text/css">
    .style2
    {
        color: #0066CC;
    }
    .style4
    {
        width: 287px
    }
</style>
<form id="form1" runat="server">

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
                                <i class="fa fa-table"></i> Đang chờ xử lý
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-12">
                        <h2>&nbsp;</h2>
                        <div class="table-responsive">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <h2 class="style2"><strong>Xử lý các trường hợp đang chờ.</strong></h2>
                        <div class="table-responsive">
                            &nbsp;<table cellspacing="1" class="nav-justified">
                                <tr>
                                    <td class="style4">
                                        Chọn hình thức xử lý:&nbsp;&nbsp;&nbsp;
                                        </td>
                                    <td class="style4">
                                        <asp:DropDownList ID="dlshinhthuc" runat="server" 
                                            Width="171px">
                                            <asp:ListItem Value="2">Hoàn thành</asp:ListItem>
                                            <asp:ListItem Value="3">Không thể xử lý</asp:ListItem>
                                        </asp:DropDownList>
                                    </td>
                                    <td>
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="style4">
                                        &nbsp;</td>
                                    <td class="style4" rowspan="6">
                                        <asp:TextBox ID="txtnoidungsc" runat="server" Height="103px" Width="282px" 
                                            TextMode="MultiLine"></asp:TextBox>
                                    </td>
                                    <td>
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="style4">
                                        &nbsp;</td>
                                    <td>
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="style4">
                                        Nội dung sửa chữa:</td>
                                    <td>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                       <button id="Button1" type="button" runat="server" class="btn btn-primary btn-sm"  onserverclick="btnHuyBo_Click"></span> Đồng ý</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="style4">
                                        &nbsp;</td>
                                    <td>
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="style4">
                                        &nbsp;</td>
                                    <td>
                                        &nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="style4">
                                        &nbsp;</td>
                                    <td>
                                        &nbsp;</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row">
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
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-6">
                        <h2></h2>
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

</form>

</body>

</html>
