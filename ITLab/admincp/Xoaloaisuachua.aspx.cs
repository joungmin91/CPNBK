using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;


namespace ITLab.admincp
{
    public partial class Xoaloaisuachua : System.Web.UI.Page
    {

        string _id;
        private void HuyDangKy()
        {
            if (CheckBox1.Checked == true)
            {

                DataTable dt = new DataTable();
                dt = clsmain._XoaLoaiSuaChua(Convert.ToInt32(_id));
                try
                {
                    Server.Transfer("taskloaisc.aspx");
                  //  Response.Redirect("viewdanhsachdk.aspx");
                }
                catch
                {


                }



            }

        }
        protected void btnXoaLoaiSc_Click(object sender, EventArgs e)
        {
            HuyDangKy();
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                _id = Convert.ToInt32(Request["idlsc"]).ToString();
            }
            catch
            {


            }
        }
    }
}