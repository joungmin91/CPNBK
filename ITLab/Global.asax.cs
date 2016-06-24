﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace ITLab
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            Application.Add("dem", 0);
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            int soluongtruycap = int.Parse(Application.Get("dem").ToString());
            soluongtruycap++;
            Application.Set("dem", soluongtruycap);
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {
            int soluongtruycap = int.Parse(Application.Get("dem").ToString());
            soluongtruycap--;
            Application.Set("dem", soluongtruycap);
        }

        protected void Application_End(object sender, EventArgs e)
        {
            Application.Remove("dem");
                
        }
    }
}