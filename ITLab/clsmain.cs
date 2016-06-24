using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Text.RegularExpressions;

namespace ITLab
{
    public class clsmain
    {
        // class dùng cho việc truy vấn CSDL

     public static string Strcnn="     Data Source=WIT;Initial Catalog=LabsManager;Integrated Security=True;User ID=sa;Password=1";
 //public static string Strcnn = "Data Source=WIN-40SK9DBOL2Q;Initial Catalog=LabsManager;User ID=sa;Password=Ngoc584227";
        public static SqlConnection cnn = new SqlConnection(Strcnn);

        // kiểm tra đăng nhập user
        public static DataTable _KiemTraDangNhap(string u,string p)
        {
            SqlCommand cmd = new SqlCommand("sp_CheckPassword", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@IDUsername", u);
            cmd.Parameters.AddWithValue("@IDPass", p);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;

        }


        public static DataTable _ThemDangKy(int ID_CLASS,int ID_User,int ID_TEACHER,int CONNTENT_TYPE,string CONNTENT_FIX)
        {
            SqlCommand cmd = new SqlCommand("sp_CLASS_CALEN_FIX_INSERT", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ID_CLASS", ID_CLASS);
            cmd.Parameters.AddWithValue("@ID_User", ID_User);
            cmd.Parameters.AddWithValue("@ID_TEACHER", ID_TEACHER);
            cmd.Parameters.AddWithValue("@CONNTENT_TYPE", CONNTENT_TYPE);
            cmd.Parameters.AddWithValue("@CONNTENT_FIX", CONNTENT_FIX);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;

        }
        public static DataTable _DanhSachLop()
        {
            SqlCommand cmd = new SqlCommand("sp_ClassLoad", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _DanhSachLop2()
        {
            SqlCommand cmd = new SqlCommand("sp_ClassLoad2", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _LoaiSuaChua()
        {
            SqlCommand cmd = new SqlCommand("sp_LoaiSuaChuaLoad", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _SoLuongRegNew()
        {
            SqlCommand cmd = new SqlCommand("sp_MoiDangKy", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public static DataTable _DangXuLy()
        {
            SqlCommand cmd = new SqlCommand("sp_DangXuLy", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _XuLyXong()
        {
            SqlCommand cmd = new SqlCommand("sp_DaXong", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _ChuaXuLy()
        {
            SqlCommand cmd = new SqlCommand("sp_ChuaXuLy", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _DanhSachLichSuDangKy(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_LoadCF", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _DanhSachLichSuDangKyLop(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_LichSuaSuaChuaLop", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public static DataTable _Huydangky(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_huydangky", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ID_CF", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public static DataTable _XoaLoaiSuaChua(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_XoaLoaiSuaChua", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@id", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public static DataTable _NgayXuLyHoanTat(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_CapNhatNgayXLHoanTat", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@id", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _Danhsachxulyhoantat(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_LoadCFadminxulyhoantat", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _Danhsachkhongthexl(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_LoadCFadminkhongxuly", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _Yeucauthuchien()
        {
            SqlCommand cmd = new SqlCommand("sp_Viewdangchothuchien", cnn);
            cmd.CommandType = CommandType.StoredProcedure;

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _SoLanSuaChua()
        {
            SqlCommand cmd = new SqlCommand("sp_ViewSoLanThucHienSuaChua", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;

        }
        public static DataTable _DanhSachLichSuDangXuLyAd(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_LoadCFadmindangxuly", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _DanhSachLichSuDangKyAd(int ma)
        {
            SqlCommand cmd = new SqlCommand("sp_LoadCFadmin", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _XuLyDangKyAd(int ma, int id)
        {
            SqlCommand cmd = new SqlCommand("sp_XuLyDangKy", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            cmd.Parameters.AddWithValue("@id", id);
            
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _XuLyDangKyAd2(int ma, int id,string noidung)
        {
            SqlCommand cmd = new SqlCommand("sp_XuLyDangKyDangCho", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            cmd.Parameters.AddWithValue("@id", id);
            cmd.Parameters.AddWithValue("@noidung", noidung);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _TaskLsc()
        {
            SqlCommand cmd = new SqlCommand("sp_TaskDanhSachLoaiSuaChua", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
         
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public static DataTable _TaskLscInsert(string tenloai)
        {
            SqlCommand cmd = new SqlCommand("sp_ThemLoaiSuaChuaInsert", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@_CONTENT_TYPE", tenloai);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public static DataTable _FuncThemLop(string tenlop,int matruong)
        {
            SqlCommand cmd = new SqlCommand("sp_PhongHoc", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@CLASSNAME", tenlop);
            cmd.Parameters.AddWithValue("@SCHOOL", matruong);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _FuncCapNhatLop(string tenlop)
        {
            SqlCommand cmd = new SqlCommand("sp_PhongHocCapNhat", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@CLASSNAME", tenlop);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _FuncLopXoa( int malop)
        {
            SqlCommand cmd = new SqlCommand("sp_PhongHocXoa", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ID_CLASS", malop);
          
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        } 

        public static DataTable _TasTruongHocLoad()  // chưa xong
        {
            SqlCommand cmd = new SqlCommand("sp_SchoolSelect", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
           
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public static DataTable _TaskLopLoad()  // chưa xong
        {
            SqlCommand cmd = new SqlCommand("sp_ClassLoad3", cnn);
            cmd.CommandType = CommandType.StoredProcedure;

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _TaskLishSuGiaoVienTheoNT(int ma,int thang,int nam)
        {
            SqlCommand cmd = new SqlCommand("sp_SelectLishSuGVtheothang", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            cmd.Parameters.AddWithValue("@thang", thang);
            cmd.Parameters.AddWithValue("@nam", nam);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }


        public static DataTable _TaskLishSuLopTheoNT(int ma, int thang, int nam,int tt)
        {
            SqlCommand cmd = new SqlCommand("sp_SelectLishSuLoptheothang", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            cmd.Parameters.AddWithValue("@thang", thang);
            cmd.Parameters.AddWithValue("@nam", nam);
            cmd.Parameters.AddWithValue("@tinhtrang", tt);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static DataTable _TaskLishSuLopTheoNT2(int ma, int thang, int nam,int tt)
        {
            SqlCommand cmd = new SqlCommand("sp_SelectLishSuLoptheothangView", cnn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@ma", ma);
            cmd.Parameters.AddWithValue("@thang", thang);
            cmd.Parameters.AddWithValue("@nam", nam);
            cmd.Parameters.AddWithValue("@tinhtrang", tt);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
        public static string BoTrang(string Chuoi, int k)
        {

            string pattern = " ";
            Regex myRegex = new Regex(pattern);
            string[] ketqua = myRegex.Split(Chuoi);
            return ketqua[k];

        }
        public static string LayChuoibaiviet(string Chuoi, int k)
        {

            string pattern = "/";
            Regex myRegex = new Regex(pattern);
            string[] ketqua = myRegex.Split(Chuoi);
            return ketqua[k];

        }

   

    }
}