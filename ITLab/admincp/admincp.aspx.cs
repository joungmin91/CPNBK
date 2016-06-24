using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Web.UI;
using System.Collections.Specialized;
namespace ITLab.admincp
{
    public partial class admincp : System.Web.UI.Page
    {
        string _U, _P;


       
        protected void Page_Load(object sender, EventArgs e)
        {
          
           
try
            {
                
                if (!IsPostBack)
                {
                  
                    BindData();
                    DanhSachDangXuLy();
                    _Moidangky();
                    _XuLyDangKy();
                    _HoanTatXuLy();
                    _KhongTheXuLy();
                }
            }
            catch
            {
                Response.Write("<script>alert('Sai tên đăng nhập hoặc mật khẩu')</script>");

            }
          
        }
        void _Moidangky()
        {

            DataTable dt = new DataTable();
            dt = clsmain._SoLuongRegNew();
            if (dt.Rows.Count > 0)
            {
                Session["Msgchuaxuly"] = dt.Rows[0]["MoiDangKy"].ToString();


            }
        }

        #region "Phương thức Repeater cho số lấn sửa chữa"

        protected void rptList_ItemDataBound(object sender, System.Web.UI.WebControls.RepeaterItemEventArgs e)
        {
            if (e.Item.ItemType == ListItemType.Item | e.Item.ItemType == ListItemType.AlternatingItem)
            {
                int TotalProducts = Convert.ToInt32(DataBinder.Eval(e.Item.DataItem, "soluong"));
                HtmlAnchor AnchorItem = (HtmlAnchor)e.Item.FindControl("AnchorItem");
                if ((AnchorItem != null))
                {
                    AnchorItem.Controls.Add(new LiteralControl("<span class=\"badge\">"));
                    AnchorItem.Controls.Add(new LiteralControl(TotalProducts.ToString()));
                    AnchorItem.Controls.Add(new LiteralControl("</span>"));
                }
            }
        }

        #endregion



        #region "Bind Data"

        private void BindData()
        {

            DataTable objBind = default(DataTable);
            //Caching
            if (Cache["Cache_Categories"] == null)
            {
                objBind = clsmain._SoLanSuaChua();
                Cache["Cache_Categories"] = objBind;
            }
            else
            {
                objBind = (DataTable)Cache["Cache_Categories"];
            }

            if (objBind != null)
            {
                if (objBind.Rows.Count > 0)
                {
                    rptList.DataSource = objBind;
                    rptList.DataBind();
                }
            }
        }

        #endregion

        void _XuLyDangKy()
        {

            DataTable dt = new DataTable();
            dt = clsmain._DangXuLy();
            if (dt.Rows.Count > 0)
            {
                Session["Msgcdangxuly"] = dt.Rows[0]["DangXuLy"].ToString();


            }
        }

        void _HoanTatXuLy()
        {

            DataTable dt = new DataTable();
            dt = clsmain._XuLyXong();
            if (dt.Rows.Count > 0)
            {
                Session["Msgxulyxong"] = dt.Rows[0]["DaXong"].ToString();


            }
        }

        void _KhongTheXuLy()
        {

            DataTable dt = new DataTable();
            dt = clsmain._ChuaXuLy();
            if (dt.Rows.Count > 0)
            {
                Session["Msgkhongthexuly"] = dt.Rows[0]["ChuaXuLy"].ToString();


            }
        }


        private void DanhSachDangXuLy()
        {

            DataTable dt = new DataTable();
            dt = clsmain._Yeucauthuchien();
            Repeater2.DataSource = dt;
            Repeater2.DataBind();

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

    }
}