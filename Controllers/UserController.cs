using Microsoft.AspNetCore.Mvc;
using React5.Models;
using System.Threading.Tasks;
using React5.Database;
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
       
        [HttpPost]    //Route to login the user
        public RedirectResult LoginUser([FromForm] User user)
        {
         //  if credentials are valid
            if(UserServices.LoginUser(user))
                return Redirect("/userpage");
         // if credentials are not valid 
            return Redirect("/auth/login?invalid=1");
        }

        [HttpPost("{signup}")]   //Route to register the user

        public RedirectResult RegisterUser([FromForm] User user) 
        {
            if (UserServices.RegisterUser(user))
            {
               return Redirect("/auth/login?registered=1");
            }
           return Redirect("/auth/signup?invalid=1");
           
        }

        [HttpGet("{getUser}")]

        public async Task<User>GetUser([FromQuery] string username)
        {

            return await UserServices.GetUser(username);
        }
    }
}