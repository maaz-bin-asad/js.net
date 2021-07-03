using Microsoft.AspNetCore.Mvc;
using React5.Models;
using System;
using React5.Services;

namespace React5.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
        public UserController()
        {
        }
       
            [HttpPost]
        public RedirectResult LoginUser([FromForm] User user)
        {
        /*if credentials are valid */
            if(UserServices.LoginUser(user))
                return Redirect("/userpage");
         /*if credentials are not valid */
            return Redirect("/auth/login");
      }
        [HttpPost("{signup}")]

        public RedirectResult RegisterUser([FromForm] User user)
        {
            if (UserServices.RegisterUser(user))
            {
               return Redirect("/auth/login");
            }
           return Redirect("/auth/signup");
           
        }
    }
}

/*
 Test credentials
 ezio@assasinscreeed.com
jhewe
*/