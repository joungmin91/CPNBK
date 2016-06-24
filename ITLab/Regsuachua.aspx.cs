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
    public partial class WebForm1 : System.Web.UI.Page
    {


        #region "Bind Data"

        private void ClassLoad()
        {
            DataTable dt = new DataTable();
            dt = clsmain._LoaiSuaChua();
            if (dt.Rows.Count > 0)
            {
                ContentPlaceHolder1_ddlLoaiDK.DataSource = dt;
                ContentPlaceHolder1_ddlLoaiDK.DataTextField = "_CONTENT_TYPE";
                ContentPlaceHolder1_ddlLoaiDK.DataValueField = "_IDTF";
                ContentPlaceHolder1_ddlLoaiDK.DataBind();
            }

        }
        #endregion

        protected void btnSumbit_Click(object sender, EventArgs e)
        {

            //Session["Erridtype"] = DropDownList1.SelectedValue.ToString();
            ////kiểm tra được chọn chưa
            //if (Session["Erridtype"].ToString() != "")
            //{
            //    // nếu đã chọn
            //    // drirect đến trang đăng ký, ngược lại ngắt tiến trình.
            //    Response.Redirect("Regthietbi.aspx");
            //}
            //else
            //{
            //    // nếu chưa có
            //    // đưa ra thông báo bẫy lỗi cho nó
            //    Response.Write("<script>alert('"+DropDownList1.SelectedValue.ToString()+"')</script>");
            //    return;
            //}
        }




        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
                ClassLoad();
            }
        }

    }
}
