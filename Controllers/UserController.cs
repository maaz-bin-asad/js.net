using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using React5.Models;
using System;
using React5.Database;
using System.Data.SQLite;


namespace React5.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
/*        List<string> courses = new List<string>();*/
        DatabaseCon con = new DatabaseCon();
        public UserController()
        {
        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            con.OpenConnection();
            /* courses.Add("C++");
             return courses;*/
            List<User> users = new List<User>();
            string query = "SELECT * FROM user";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read()) {
                    User obj = new User();
                    obj.username = result["username"].ToString();
                    obj.mail = result["mail"].ToString();
                    obj.hashpassword = result["hashpassword"].ToString();
                    users.Add(obj);
             }
            }
            con.CloseConnetion();
            return users;
        }

        [HttpPost]
        public RedirectResult Insert([FromForm] User user)

        {
            string name=Convert.ToString(user.username);
            return Redirect("/"+name);      
        }


    }
}