using System;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.text.html;
using iTextSharp.text.html.simpleparser;

namespace ITLab.admincp
{
    public partial class LichSuSuaChuaLop : System.Web.UI.Page
    {
      public  string nam;
       public int malop,t,n,tt;
        DataTable dt1 = new DataTable();
        protected void Page_Load(object sender, EventArgs e)
        {
            
         
                if (!IsPostBack)
                {
                   
                   Session["countfixclass"] = "0";
                    ClassLoad();
                }
       
         
        }

        private void ClassLoad()
        {
            DataTable dt = new DataTable();
            dt = clsmain._DanhSachLop2();
            if (dt.Rows.Count > 0)
            {
                ASPxComboBox1.DataSource = dt;
                ASPxComboBox1.TextField = "NAMES";
                ASPxComboBox1.ValueField = "ID_CLASS";
                ASPxComboBox1.DataBind();
            }

        }

        private void LichSuLoad(int ma, int t, int n, int tt)
        {
            DataTable dt = new DataTable();
          
            dt = clsmain._TaskLishSuLopTheoNT(ma, t, n,tt);
            if (dt.Rows.Count > 0)
            {

                Repeater2.DataSource = dt;
                Repeater2.DataBind();
                Session["countfixclass"] = dt.Rows.Count.ToString();
            }
            else
            {
            

                Repeater2.DataSource = null; 
                Repeater2.DataBind();

            }

        }
    
        protected void btnSave_Click(object sender, EventArgs e)
        {
           
             
      
        }
        protected void cmdXuat_Click(object sender, EventArgs e)
        {
            dt1 = new DataTable();
            nam = clsmain.LayChuoibaiviet(_dateedit.Value.ToString(), 2);
            malop = Convert.ToInt32(ASPxComboBox1.Value.ToString());
            t = Convert.ToInt32(clsmain.LayChuoibaiviet(_dateedit.Value.ToString(), 0));
            n = Convert.ToInt32(clsmain.BoTrang(nam, 0));
            tt = Convert.ToInt32(ASPxComboBox2.Value.ToString());
            dt1 = clsmain._TaskLishSuLopTheoNT2(malop, t, n,tt);
            if (dt1.Rows.Count > 0)
            {
                //Create a dummy GridView
                GridView GridView1 = new GridView();
                GridView1.AllowPaging = false;
                GridView1.DataSource = dt1;
                GridView1.DataBind();

                GridView gv = new GridView();
                gv.DataSource = dt1;
                gv.DataBind();
                Response.ClearContent();
                Response.Buffer = true;
                Response.AddHeader("content-disposition", "attachment; filename="+ASPxComboBox1.Text.ToString()+DateTime.Now+".xls");
                Response.ContentType = "application/ms-excel";
                Response.Charset = "";
                Response.ContentEncoding = System.Text.Encoding.UTF8;
                StringWriter sw = new StringWriter();
                HtmlTextWriter htw = new HtmlTextWriter(sw);
                htw.WriteLine("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");
                gv.RenderControl(htw);
                Response.Output.Write(sw.ToString());
                Response.Flush();
                Response.End();
            }
            else
            {
                Response.Write("<script>alert('Có lỗi đang xảy ra!')</script>");
            }
            
        }
     
        protected void cmdXem_Click(object sender, EventArgs e)
        {
                malop = Convert.ToInt32(ASPxComboBox1.Value.ToString());
               
                nam = clsmain.LayChuoibaiviet(_dateedit.Value.ToString(), 2);
                t = Convert.ToInt32(clsmain.LayChuoibaiviet(_dateedit.Value.ToString(), 0));
                n = Convert.ToInt32(clsmain.BoTrang(nam, 0));
                tt = Convert.ToInt32(ASPxComboBox2.Value.ToString());
                LichSuLoad(malop, t, n,tt);

           
       
        }
     
    }
}