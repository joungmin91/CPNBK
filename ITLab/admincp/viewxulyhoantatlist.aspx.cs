using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace ITLab.admincp
{
    public partial class viewxulyhoantatlist : System.Web.UI.Page
    {
        private void DanhSachDangXuLyHoanTat()
        {

            DataTable dt = new DataTable();
            dt = clsmain._Danhsachxulyhoantat(0);
            Repeater2.DataSource = dt;
            Repeater2.DataBind();
            Session["Msgxulyxong1"] = dt.Rows.Count.ToString();
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            DanhSachDangXuLyHoanTat();
        }
    }
}