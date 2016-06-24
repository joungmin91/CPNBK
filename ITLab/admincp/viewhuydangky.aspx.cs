using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace ITLab.admincp
{
    public partial class viewhuydangky : System.Web.UI.Page
    {
        string _id;
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                _id = Convert.ToInt32(Request["idhuydangky"]).ToString();
            }
            catch 
            {
                
            
            }
          
        }
        private void Xoa()
        {
            if (CheckBox1.Checked == true)
            {

                DataTable dt = new DataTable();
                dt = clsmain._Huydangky(  Convert.ToInt32( _id.ToString()));
                try
                {
                    Response.Redirect("viewdanhsachdk.aspx");
                }
                catch
                {


                }



            }

        }
        protected void btnHuyBo_Click(object sender, EventArgs e)
        {
            if (CheckBox1.Checked != true)
            {
                Response.Write("<script>alert('Bạn chưa đánh dấu chọn')</script>");
                return;
            }
            else
            {
                Xoa();
            }
        }
    }
}