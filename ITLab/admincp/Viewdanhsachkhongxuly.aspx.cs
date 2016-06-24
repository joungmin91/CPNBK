using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
namespace ITLab.admincp
{
    public partial class Viewdanhsachkhongxuly : System.Web.UI.Page
    {
        private void DanhSachDangXuLy()
        {

            DataTable dt = new DataTable();
            dt = clsmain._Danhsachkhongthexl(0);
            Repeater2.DataSource = dt;
            Repeater2.DataBind();
            Session["Msgkhongthexuly1"] = dt.Rows.Count.ToString();
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            DanhSachDangXuLy();
        }
    }
}