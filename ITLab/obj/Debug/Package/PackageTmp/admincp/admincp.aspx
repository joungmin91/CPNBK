<%@ Page  EnableViewStateMac="false"  Language="C#" AutoEventWireup="true" CodeBehind="admincp.aspx.cs" Inherits="ITLab.admincp.admincp" %>

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

    <!-- Morris Charts CSS -->
    <link href="css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
   <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    

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
            
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li class="active">
                        <a href="#"><i class="fa fa-fw fa-dashboard"></i> Thiết bị</a>
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
                            <small>THCS Nguyễn Bỉnh Khiêm - Quản Lý Thiết bị Online</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li class="active">
                                <i class="fa fa-dashboard"></i> Quản lý chung

                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-12">
                        <div class="alert alert-info alert-dismissable">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <i class="fa fa-info-circle"></i>  <strong>THCS Nguyễn Bỉnh Khiêm</strong> <a href="http://startbootstrap.com/template-overviews/sb-admin-2" class="alert-link"></a>Chúc các bạn ngày làm việc mới vui vẻ!
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-comments fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><%=Session["Msgchuaxuly"].ToString() %></div>
                                        <div>Đăng ký mới</div>
                                    </div>
                                </div>
                            </div>
                            <a href="viewdanhsachdk.aspx">
                                <div class="panel-footer">
                                    <span class="pull-left">Chi tiết</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-tasks fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><%=  Session["Msgcdangxuly"].ToString()%></div>
                                        <div>Đang xử lý!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="viewdangxulylist.aspx">
                                <div class="panel-footer">
                                    <span class="pull-left">Chi tiết</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-shopping-cart fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><%=Session["Msgxulyxong"].ToString()%></div>
                                        <div>Hoàn tất!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="viewxulyhoantatlist.aspx">
                                <div class="panel-footer">
                                    <span class="pull-left">Chi tiết</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-red">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-support fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><%=Session["Msgkhongthexuly"].ToString()%></div>
                                        <div>Chưa thể xử lý!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="Viewdanhsachkhongxuly.aspx">
                                <div class="panel-footer">
                                    <span class="pull-left">Chi tiết</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i>Số lần sửa chữa.</h3>
                            </div>
                            <div class="panel-body">
                                <div class="list-group">
                                     <div class="list-group">
                        <asp:Repeater ID="rptList" OnItemDataBound="rptList_ItemDataBound" runat="server">
                             <ItemTemplate>
                                <a id="AnchorItem" runat="server" class="list-group-item"><%#Eval("Lop")%><%# Eval("LoaiSuaChua")%></a>
                             </ItemTemplate>
                        </asp:Repeater>
                    </div>
                                    </div>
                                <div class="text-right">
                                    <a href="#">Xem tất cả hoạt động<i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-money fa-fw"></i>Yêu cầu thực hiện</h3>
                            </div>
                            <div class="panel-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>Lớp</th>
                                                <th>Ngày Đăng ký</th>
                                                <th>Sửa chữa</th>
                                                <th>Tình trạng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           <asp:Repeater ID="Repeater2" runat="server">
                     <ItemTemplate>
                <tr>
                <td><%#Eval("Lop")%></td>
                  <td><%#Eval("_DATE_REG")%></td>
                <td><%#Eval("LoaiSuaChua")%></td>
                <td><%#Eval("_SYS_Info")%></td>
              
                <%----<td><%#Eval("Discontinued").ToString()=="True" ? "<img src='img/on.gif' />": "<img src='img/off.gif' />"%></td>--%>
              <%--  <td><a href="viewhuydangky.aspx?idhuydangky=<%#Eval("ID_CF") %>"><%#Eval("_SYS").ToString() == "0" ? "Xóa" : ""%></a></td>
                <td><a href="viewxulydangky.aspx?idclassxl=<%#Eval("ID_CF") %>">Xử lý</td>--%>
           <%--     <td><%#Eval("_SYS_Info")%></td>--%>
                </tr>
                </ItemTemplate>
                    </asp:Repeater>
                      </HeaderTemplate>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-right">
                                    <a href="#">Xem tất cả hoạt động<i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
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

    <!-- Morris Charts JavaScript -->
    <script src="js/plugins/morris/raphael.min.js"></script>
    <script src="js/plugins/morris/morris.min.js"></script>
    <script src="js/plugins/morris/morris-data.js"></script>

</body>

</html>
