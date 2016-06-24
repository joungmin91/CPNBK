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
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            _U = txtUserName.Text ;
            _P = txtPassword.Text;
        }

        string _U,_P;
        // Kiểm tra đăng nhập, cho quản trị và người dùng
      

        void KiemTraDangNhap()
        {

            try
            {
                if (_U != "" && _P != "")
                {
                    DataTable dt = new DataTable();
                    dt = clsmain._KiemTraDangNhap(_U, _P);
                    if (dt.Rows.Count > 0 && Convert.ToInt16(dt.Rows[0][0]).ToString() == "0")
                    {
                        Session["ErrUser"] = dt.Rows[0]["ErrUser"].ToString(); //Viet proc tra ve ten Username roi dien vao nhe.
                        Session["ErrIDUser"] = dt.Rows[0]["ErrIDUser"].ToString();
                        Session["Errid"] = dt.Rows[0]["Errid"].ToString();
                        Response.Redirect("Regsuachua.aspx");
                    }
                    else
                        Response.Write("<script>alert('Sai tên đăng nhập hoặc mật khẩu')</script>");

                }
                else
                    Response.Write("<script>alert('Vui lòng nhập lại')</script>");
            }
            catch 
            {

                Response.Write("<script>alert('Lỗi kết nối')</script>");
            }
           
        }
        protected void cmdLogin_Click(object sender, EventArgs e)
        {
            KiemTraDangNhap();
        }
    }
}