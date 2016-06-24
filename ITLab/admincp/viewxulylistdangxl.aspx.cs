using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace ITLab.admincp
{
    public partial class viewxulylistdangxl : System.Web.UI.Page
    {
        string _id;
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                _id = Convert.ToInt32(Request["idcxl"]).ToString();
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
                dt = clsmain._XuLyDangKyAd2(Convert.ToInt32(dlshinhthuc.SelectedValue.ToString()), Convert.ToInt32(_id),txtnoidungsc.Text.Trim());

            }

        }
        private void CapNhatNgay()
        {

            DataTable dt = new DataTable();
            dt = clsmain._NgayXuLyHoanTat(Convert.ToInt32(_id));



        }
        protected void btnHuyBo_Click(object sender, EventArgs e)
        {
            XuLyDangKy();
            CapNhatNgay();
            try
            {
                Response.Redirect("viewdangxulylist.aspx");
            }
            catch
            {

            }
        }
    }
}