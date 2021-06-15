using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using React5.Models;
using System;
namespace React5.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
        List<string> courses = new List<string>();
        public UserController()
        {
        }
        [HttpGet]
        public List<string> Get()
        {
            courses.Add("C++");
            return courses;
        }

        [HttpPost]
        public RedirectResult Insert([FromForm] User user)

        {
            string name=Convert.ToString(user.userName);
            return Redirect("/"+name);      
        }


    }
}