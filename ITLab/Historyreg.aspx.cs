using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

namespace ITLab
{
    public partial class Historyreg : System.Web.UI.Page
    {
        
        protected void Page_Load(object sender, EventArgs e)
        {
            LichSuDangKy();
        }
        int ma;
        string Chonxoa()
        {
            if (string.IsNullOrEmpty(Request["chonxoa"]))
                return "";
            return Request["chonxoa"].ToString();
        }
        private void LichSuDangKy()
        {
            ma = Convert.ToInt32(Session["MaLop"].ToString());
            DataTable dt = new DataTable();
            dt = clsmain._DanhSachLichSuDangKy(ma);
             Repeater2.DataSource = dt;
            Repeater2.DataBind();
        }
    }
}