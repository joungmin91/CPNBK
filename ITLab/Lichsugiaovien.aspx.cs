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
    public partial class WebForm2 : System.Web.UI.Page
    {
        int ma;
        int t, n;
        private void LichSuLoad(int ma,int t,int n)
        {
            DataTable dt = new DataTable();
            dt = clsmain._TaskLishSuGiaoVienTheoNT(ma,t,n);
            if (dt.Rows.Count > 0)
            {
                Repeater2.DataSource = dt;
                Repeater2.DataBind();
            }

        }
        private void LichSuDangKy()
        {
            ma = Convert.ToInt32(Session["ErrIDUser"].ToString());
            DataTable dt = new DataTable();
            dt = clsmain._DanhSachLichSuDangKyLop(ma);
            Repeater2.DataSource = dt;
            Repeater2.DataBind();
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
              
                LichSuDangKy();
            }
        }

        protected void cmdXem_Click(object sender, EventArgs e)
        {
            try
            {
                ma = Convert.ToInt32(Session["ErrIDUser"].ToString());
                Response.Write("<script>alert(" + ma + "')</script>");
                string nam = clsmain.LayChuoibaiviet(_dateedit.Value.ToString(), 2);
                t = Convert.ToInt32(clsmain.LayChuoibaiviet(_dateedit.Value.ToString(), 0));
                n = Convert.ToInt32(clsmain.BoTrang(nam, 0));

                LichSuLoad(ma, t, n);

            }
            catch 
            {
                
              
            }
       
         
       
        }
     
    }
}