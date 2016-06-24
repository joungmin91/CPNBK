
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI.WebControls;
namespace ITLab.admincp
{
    public partial class editphong : System.Web.UI.Page
    {
        string _id;
        protected void Page_Load(object sender, EventArgs e)
        {
          
            try
            {
                _id = Convert.ToInt32(Request["maphong"]).ToString();
            }
            catch
            {


            }
        }
        protected void btnXoaLop_Click(object sender, EventArgs e)
        {
            if (CheckBox1.Checked != true)
            {
                Response.Write("<script>alert('Bạn chưa đánh dấu chọn')</script>");
                return;
            }
            else
            {
                Xoa(Convert.ToInt32(_id));
            }
        }


        private void Xoa(int ma)
        {
            try
            {
                DataTable dt = new DataTable();
                dt = clsmain._FuncLopXoa(ma);
                if (dt.Rows.Count > 0)
                {

                    Response.Redirect("DanhMucLop.aspx");
                }
                  
            }
            catch
            {
                Response.Write("<script>alert('Vui lòng chọn đơn vị')</script>");

            }


        }
    }
}