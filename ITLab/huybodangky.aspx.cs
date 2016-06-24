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
    public partial class huybodangky : System.Web.UI.Page
    {

         string _a;
        private void _Huydangky()
        {
            if (chkchon.Checked == true)
            {
                DataTable dt = new DataTable();
                dt = clsmain._Huydangky(Convert.ToInt32(_a.ToString()));
                if (dt.Rows.Count > 0)
                {
                    Response.Redirect("Historyreg.aspx");

                }
            }
            else
            {
                Response.Write("<script>alert('Nếu đồng ý hủy bạn hãy đánh dấu chọn !')</script>");
                return;
            }
        }
      
        protected void btnHuyBo_Click(object sender, EventArgs e)
        {
            if (chkchon.Checked != true)
            {
                Response.Write("<script>alert('Bạn chưa đánh dấu chọn')</script>");
                return;
            }
            else
            {
                _Huydangky();
            }
         

            //Response.Write("<script>alert('" + DropDownList1.SelectedValue.ToString() + txtComments.Text.ToString() + Session["Id"]+ "')</script>");
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            _a = Convert.ToInt32(Request["idhuydangky"]).ToString();
            //Response.Write("<script>alert('"+a+"')</script>");
            
        }

        protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
        {
            Response.Redirect("Historyreg.aspx");

        }
    }
}