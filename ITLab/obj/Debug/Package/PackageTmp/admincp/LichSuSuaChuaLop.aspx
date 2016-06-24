<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LichSuSuaChuaLop.aspx.cs" Inherits="ITLab.admincp.LichSuSuaChuaLop" %>

<%@ Register assembly="DevExpress.Web.v14.1, Version=14.1.6.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" namespace="DevExpress.Web.ASPxEditors" tagprefix="dx" %>

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
            color: #0066CC;
        }
        .style2
        {
            width: 157px;
        }
        .style3
        {
            width: 227px;
        }
        .style4
        {
            width: 117px
        }
        .style5
        {
            width: 185px;
        }
        .style6
        {
            width: 108px;
        }
        .style7
        {
            width: 144px;
        }
        </style>

    <script language="javascript" type="text/javascript">
// <![CDATA[

        function Button2_onclick() {

        }

// ]]>
    </script>
</head>

<body>

    <form id="form1" runat="server">

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
                <li class="dropdown">
                    <ul class="dropdown-menu message-dropdown">
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-footer">
                            <a href="#">Read All New Messages</a>
                        </li>
                    </ul>
                </li>
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
                                <i class="fa fa-table"></i>Lịch sử sửa chữa thiết bị theo lớp</li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-12">
                        <h2>Số lượng sửa chữa: <span class="badge badge-blue"><%=Session["countfixclass"].ToString()%></span></h2>
                            <table cellspacing="1" class="nav-justified">
                                <tr>
                                    <td class="style2">
                                        Tháng, năm:
                                    </td>
                                    <td class="style3">
                                        <dx:ASPxDateEdit ID="_dateedit" runat="server" Height="16px" Theme="Glass" 
                                Width="200px" EditFormat="Custom" EditFormatString="dd/MM/yyyy">
            </dx:ASPxDateEdit>
                                    </td>
                                    <td class="style4">
                                        Lớp học:</td>
                                    <td class="style5">
                                        <dx:ASPxComboBox ID="ASPxComboBox1" runat="server" Theme="PlasticBlue">
                                            <Items>
                                                <dx:ListEditItem Text="Chọn xem tất cả" Value="0" />
                                            </Items>
                                           
                                        </dx:ASPxComboBox>
                                    </td>
                                    <td class="style7">
                                        Tình trạng:</td>
                                    <td class="style5">
                                        <dx:ASPxComboBox ID="ASPxComboBox2" runat="server" Theme="PlasticBlue">
                                            <Items>
                                                <dx:ListEditItem Text="Chưa xử lý" Value="0" />
                                                <dx:ListEditItem Text="Đang xử lý" Value="1" />
                                                <dx:ListEditItem Text="Đã xử lý" Value="2" />
                                            </Items>
                                           
                                        </dx:ASPxComboBox>
                                    </td>
                                    <td class="style6">
                                       <button id="Button1" type="button" runat="server" class="btn btn-primary btn-sm"  onserverclick="cmdXem_Click"><span class="glyphicon glyphicon-search"></span> 
                                           Xem</button>
                                    </td>
                                    <td>
                                        &nbsp;
                                       <button id="Button2" type="button" runat="server" 
                                            class="btn btn-primary btn-sm"  onserverclick="cmdXuat_Click"><span class="glyphicon glyphicon-file"></span> 
                                           Excel</button>
                                        &nbsp;</td>
                                </tr>
                        </table>
    
                        &nbsp;<div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead>
                                           <tr>
                  
                        <th class="style1" >STT                  
                        <th class="style1" >Lớp</th>
                        <th class="style1" >Giáo viên</th>
                        <th class="style1" >Loại sửa chữa</th>
                        <th class="style1">Nội dung</th>
                        <th class="style1">Nội dung sửa chữa</th>
                        <th class="style1">Ngày sửa</th>
                        <th class="style1">Ngày hoàn tất</th>
                           <th class="style1">Tình trạng</th>
                                     </tr>
                                      <asp:Repeater ID="Repeater2" runat="server">
                     <ItemTemplate>
                <tr>
                <td><%#Eval("STT")%></td>
                <td><%#Eval("LOP")%></td>
                <td><%#Eval("ID_TEACHER")%></td>
                <td><%#Eval("LoaiSuaChua")%></td>
                <td><%#Eval("CONNTENT_FIX")%></td>
                    <td><%#Eval("NoiDungSuaChua")%></td>
                <td><%#Eval("_DATE_REG")%></td>
                  <td><%#Eval("_DATE_FIX")%></td>
                <td><%#Eval("_SYS_Info")%></td>
                <%----<td><%#Eval("Discontinued").ToString()=="True" ? "<img src='img/on.gif' />": "<img src='img/off.gif' />"%></td>--%>
             
             
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
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-6">
                        <h2>                  
                        <p><a target="_blank" href="#">© 2015 THCS Nguyễn Bỉnh Khiêm</a>.</p>
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