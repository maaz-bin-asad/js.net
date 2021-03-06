using Microsoft.AspNetCore.Mvc;
using React5.Models;
using System.Threading.Tasks;
using React5.Database;
using React5.Services;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace React5.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
        public UserController()
        {
        }
       [HttpGet("checkAuth")]    //Routes to check authenticated user
       
       public bool CheckAuthentication()
        {
            if (HttpContext.Request.Cookies.ContainsKey("AuthCookie")) return true;
            return false;
        }

        [HttpPost]    //Route to login the user
        public IActionResult LoginUser([FromForm] User user)
        {
            //  if credentials are valid
            if (UserServices.LoginUser(user))
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.mail)
                };
                var claimsIdentity = new ClaimsIdentity(claims, "Login");

                HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));
                return LocalRedirect("/userpage");
            }
            // if credentials are not valid 
            return LocalRedirect("/auth/login?invalid=1");
        }

        [HttpGet("logout")]    //Route to logout the user

        public async Task<IActionResult> LogOut()
        {
            //SignOutAsync is Extension method for SignOut    
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            //Redirect to home page    
            return LocalRedirect("/auth/login");
        }
        [HttpPost("signup")]   //Route to register the user

        public IActionResult RegisterUser([FromForm] User user) 
        {
            if (UserServices.RegisterUser(user))
            {
               return LocalRedirect("/auth/login?registered=1");
            }
           return LocalRedirect("/auth/signup?invalid=1");
           
        }
        
        [HttpGet("getUser")]    // Route to get user details for their profile
        [Authorize]
        public async Task<User>GetUser([FromQuery] string username)
        {

            return await UserServices.GetUser(username);
        }
    }
}