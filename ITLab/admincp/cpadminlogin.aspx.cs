using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections.Specialized;
using System.Data;
namespace ITLab.admincp
{
    public partial class cpadminlogin : System.Web.UI.Page
    {
        string _U, _P;
        protected void Page_Load(object sender, EventArgs e)
        {

            //_U = Request.Form["fieldUser"];
            //_P = Request.Form["fieldPassword"];

        }
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
                        Session["ErrSys"] = dt.Rows[0]["ErrSys"].ToString();
                        if (Session["ErrSys"].ToString() == "0")
                        {
                            Response.Redirect("admincp.aspx");
                        }
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
        protected void btnShow_Click(object sender, EventArgs e)
        {


            _U = Request.Form["fieldUser"];
          _P = Request.Form["fieldPassword"];

          KiemTraDangNhap();

            
        }
    }
}