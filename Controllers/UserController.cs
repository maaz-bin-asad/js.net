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
        DatabaseCon con = new DatabaseCon();
        public UserController()
        {
        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            con.OpenConnection();
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
            string mail = Convert.ToString(user.mail);
            string pass = Convert.ToString(user.hashpassword);
            Console.WriteLine(mail);  //debugging
            Console.WriteLine(pass);  //debugging
            con.OpenConnection();
            string query = "SELECT * FROM user where hashpassword=@pass";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@pass", pass);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                bool valid = false;
                while (result.Read())
                {
                    string email = Convert.ToString(result["mail"]);
                    if (email == mail)
                    {
                        valid = true;
                    }
                }
                con.CloseConnetion();
                if (valid)
                {
                    return Redirect("/fetch-data");

                }
                else
                {
                    return Redirect("/");

                }

            }
            else
            {
                con.CloseConnetion();
                return Redirect("/");
            }

        }


    }
}

/*
 Test credentials
 ezio@assasinscreeed.com
jhewe
*/