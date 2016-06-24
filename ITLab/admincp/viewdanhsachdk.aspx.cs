using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace ITLab.admincp
{
    public partial class viewdanhsachdk : System.Web.UI.Page
    {
        private void DanhSachDangKy()
        {

            DataTable dt = new DataTable();
            dt = clsmain._DanhSachLichSuDangKyAd(0);
            Repeater2.DataSource = dt;
            Repeater2.DataBind();
            Session["Msgchuaxuly1"] = dt.Rows.Count.ToString();
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            DanhSachDangKy();
        }
    }
}