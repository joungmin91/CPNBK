using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace ITLab.admincp
{
    public partial class viewxulydangky : System.Web.UI.Page
    {
        string _id;
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                _id = Convert.ToInt32(Request["idclassxl"]).ToString();
            }
            catch 
            {
                
            }
         
        }
        private void XuLyDangKy()
        {
            if (dlshinhthuc.SelectedIndex >= 0)
            {

                DataTable dt = new DataTable();
                dt = clsmain._XuLyDangKyAd(Convert.ToInt32(dlshinhthuc.SelectedValue.ToString()), Convert.ToInt32(_id));
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
            XuLyDangKy();
        }
    }
}