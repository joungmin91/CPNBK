using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;


namespace ITLab.admincp
{
    public partial class taskloaisc : System.Web.UI.Page
    {
        private void DanhSachDangXuLy()
        {

            DataTable dt = new DataTable();
            dt = clsmain._TaskLsc();
            Repeater2.DataSource = dt;
            Repeater2.DataBind();
            Session["countlsc"] = dt.Rows.Count.ToString();
        }

        private void Them()
        {
            if (txtloaisuachua.Text == "")
            {
                Response.Write("<script>alert('Vui lòng điền thông tin loại sửa chữa!')</script>");
                return;
            }
            else
            {
                DataTable dt = new DataTable();
                dt = clsmain._TaskLscInsert(txtloaisuachua.Text.Trim());
                try 
	            {	        
		   Server.Transfer("./taskloaisc.aspx");
	            }
	            catch
                {
		
		      
	            }
                             
                  //  Response.Redirect("admincp/taskloaisc.aspx");

                }
            
           
        }
        protected void Page_Load(object sender, EventArgs e)
        {
           
                DanhSachDangXuLy();
            
        }

        protected void btnHuyBo_Click(object sender, EventArgs e)
        {
            Them();
        }
    }
}