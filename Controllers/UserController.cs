using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using React5.Models;
using System;
using React5.Database;
using System.Data.SQLite;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Text;


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
        static string ComputeSha256Hash(string rawData)
        {
            // Create a SHA256   
            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }

            [HttpPost]
        public RedirectResult Insert([FromForm] User user)

        {
            string mail = Convert.ToString(user.mail);
            string pass = Convert.ToString(user.hashpassword);
            string hashed = ComputeSha256Hash(pass);
            Console.WriteLine(hashed);
            con.OpenConnection();
            string query = "SELECT * FROM user where hashpassword=@pass";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@pass", hashed);
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
                    return Redirect("/userpage");

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
        [HttpPost("{signup}")]

        public RedirectResult Register([FromForm] User user)
        {
            string mail = Convert.ToString(user.mail);
            string pass = Convert.ToString(user.hashpassword);
            string hashed = ComputeSha256Hash(pass);
            string username = Convert.ToString(user.username);
            con.OpenConnection();
            string query = "SELECT * FROM user where mail=@email";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@email", mail);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                con.CloseConnetion();
                return Redirect("/auth/signup");

            }
            else
            {
                con.CloseConnetion();
                con.OpenConnection();
                query = "insert into user ('username', 'hashpassword', 'mail') values(@username, @hashpassword, @mail)";
                SQLiteCommand comm = new SQLiteCommand(query, con.myConnection);
                comm.Parameters.AddWithValue("@username", username);
                comm.Parameters.AddWithValue("@hashpassword", hashed);
                comm.Parameters.AddWithValue("@mail", mail);
                var res = comm.ExecuteNonQuery();
                con.CloseConnetion();
                return Redirect("/auth/login");
            }



        }


    }
}

/*
 Test credentials
 ezio@assasinscreeed.com
jhewe
*/