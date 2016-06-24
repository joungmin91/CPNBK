using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI.WebControls;


namespace ITLab.admincp
{
    public partial class DanhMucLop : System.Web.UI.Page
    {
        protected void btnThemLop_Click(object sender, EventArgs e)
        {

            ThemLop();

        }
        protected void lnkEdit_Command(object sender, CommandEventArgs e)
        {
            Response.Write("<script>alert('" + e.CommandArgument.ToString()+ "')</script>");
           
        }
       

        private void LoadDanhSachTruong()
        {
            DataTable dt = new DataTable();
            dt = clsmain._TasTruongHocLoad();
            if (dt.Rows.Count > 0)
            {
                ASPxComboBox1.DataSource = dt;
                ASPxComboBox1.TextField = "NAME";
                ASPxComboBox1.ValueField = "SCHOOL";
                ASPxComboBox1.DataBind();
                ASPxComboBox1.SelectedIndex = 0;
            }

        }

        private void ThemLop()
        {
            try
            {
                if (txttenlop.Text == "")
                {
                    Response.Write("<script>alert('Vui lòng điền tên lớp')</script>");
                }
                DataTable dt = new DataTable();
                dt = clsmain._FuncThemLop(txttenlop.Text.Trim(), Convert.ToInt32(ASPxComboBox1.Value.ToString()));
                if (dt.Rows.Count > 0)
                {
                    DataTable dt2 = new DataTable();
                    dt2 = clsmain._TaskLopLoad();
                    Repeater2.DataSource = dt2;
                    Repeater2.DataBind();
                    Session["countdml"] = dt2.Rows.Count.ToString();
                    txttenlop.Text = "";
                }
            }
            catch 
            {
                Response.Write("<script>alert('Vui lòng chọn đơn vị')</script>");
              
            }
        

        }

        private void Danhsachlop()
        {
            DataTable dt2 = new DataTable();
            dt2 = clsmain._TaskLopLoad();
            Repeater2.DataSource = dt2;
            Repeater2.DataBind();
            Session["countdml"] = dt2.Rows.Count.ToString();
        }

        protected void Page_Load(object sender, EventArgs e)
        {

         
          
            Session["countdml"] = "0";
            if (!IsPostBack)
            {
                LoadDanhSachTruong();
                Danhsachlop();
            }
        }
    }
}