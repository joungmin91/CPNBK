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
    public partial class Regmaytinh : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string v = Request.QueryString["id"];
            Session["Id"] = v;
            if (!IsPostBack)
            {
               
                ClassLoad();
            }
        }


        private void ClassLoad()
        {
            DataTable dt = new DataTable();
            dt = clsmain._DanhSachLop();
            if (dt.Rows.Count > 0)
            {
                DropDownList1.DataSource = dt;
                DropDownList1.DataTextField = "NAMES";
                DropDownList1.DataValueField = "ID_CLASS";
                DropDownList1.DataBind();
            }
           
        }
        private void ClassRegInsert()
        {
            DataTable dt = new DataTable();
            dt = clsmain._ThemDangKy(Convert.ToInt32(DropDownList1.SelectedValue.ToString()), Convert.ToInt32(Session["Errid"].ToString()), Convert.ToInt32(Session["ErrIDUser"].ToString()), Convert.ToInt32(Session["Id"].ToString()), txtComments.Text.ToString());
           Session["MaLop"]=Convert.ToInt32(DropDownList1.SelectedValue.ToString());
            if (dt.Rows.Count > 0)
            {
                Response.Redirect("Historyreg.aspx");
            }
        }
        protected void btnSumbit_Click(object sender, EventArgs e)
        {
            ClassRegInsert();

            //Response.Write("<script>alert('" + DropDownList1.SelectedValue.ToString() + txtComments.Text.ToString() + Session["Id"]+ "')</script>");
        }
    }
}