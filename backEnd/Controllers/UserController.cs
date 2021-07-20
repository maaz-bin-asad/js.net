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
using System;
namespace React5.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
        public UserController()
        {
        }
       [HttpGet("checkAuth")]
       
       public bool CheckAuthentication()
        {
            Console.WriteLine(HttpContext.Request.Cookies.ContainsKey("AuthCookie"));
            if (HttpContext.Request.Cookies.ContainsKey("AuthCookie")) return true;
            return false;

        }

        [HttpPost]    //Route to login the user
        public IActionResult LoginUser([FromBody] User user)
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
                return StatusCode(202);
            }
            // if credentials are not valid 
            return StatusCode(401);
        }

        [HttpGet("logout")]
        public async Task<IActionResult> LogOut()
        {
            //SignOutAsync is Extension method for SignOut    
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            //Redirect to home page    
            return Redirect("http://localhost:3000/auth/login");
        }
        [HttpPost("signup")]   //Route to register the user

        public IActionResult RegisterUser([FromForm] User user) 
        {
            if (UserServices.RegisterUser(user))
            {
               return StatusCode(201);
            }
           return StatusCode(406);
           
        }
        
        [HttpGet("getUser")]

        public async Task<User>GetUser([FromQuery] string username)
        {

            return await UserServices.GetUser(username);
        }
    }
}