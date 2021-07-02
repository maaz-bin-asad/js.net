using React5.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Threading.Tasks;
using System.Data.SQLite;
using React5.Database;

namespace React5.Services
{
    public class UserServices
    {
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
        public static bool ValidateCredentials(User user,string opreation)
        {
            if (opreation == "Register")
            {
                Console.WriteLine(user.username);
                if (user.username == "" || user.mail == "" || user.hashpassword == "")
                    return false;
            }
            else if(opreation == "Login")
            {
                if (user.mail == "" || user.hashpassword == "")
                    return false;
           }
            return true;

        }

    public static bool RegisterUser(User user)
        {
            if (!ValidateCredentials(user,"Register"))  /*validate credentials for backend side*/
            {
                Console.WriteLine("Credentials required");
                return false;  // redirect to signup page
            }
            DatabaseCon con = new DatabaseCon();
            string mail = Convert.ToString(user.mail);
            string pass = Convert.ToString(user.hashpassword);
            string hashed = ComputeSha256Hash(pass);
            string username = Convert.ToString(user.username);
            con.OpenConnection();
            string query = "SELECT * FROM user where mail=@email OR username=@username"; 
            // provided username or email matches then flash a message user already exits
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@email", mail);
            myCommand.Parameters.AddWithValue("@username", username);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                con.CloseConnetion();
                return false;

            }
            else
            {
                con.CloseConnetion();
                con.OpenConnection();
                query = "insert into user ('username', 'hashpassword', 'mail', 'rating') values(@username, @hashpassword, @mail, @rating)";
                SQLiteCommand comm = new SQLiteCommand(query, con.myConnection);
                comm.Parameters.AddWithValue("@username", username);
                comm.Parameters.AddWithValue("@hashpassword", hashed);
                comm.Parameters.AddWithValue("@mail", mail);
                comm.Parameters.AddWithValue("@rating", 0);
                var res = comm.ExecuteNonQuery();
                con.CloseConnetion();
                return true;
            }
        }
            public static bool LoginUser(User user)
            {
            bool valid = false;
            if (!ValidateCredentials(user, "Login"))
                return valid;
            DatabaseCon con = new DatabaseCon();
            string mail = Convert.ToString(user.mail);
                string pass = Convert.ToString(user.hashpassword);
                con.OpenConnection();
                string query = "SELECT * FROM user where mail=@mail";
                SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
                myCommand.Parameters.AddWithValue("@mail", mail);
                SQLiteDataReader result = myCommand.ExecuteReader();
                if (result.HasRows)
                {
                   
                    while (result.Read())
                    {
                        string pass_db = Convert.ToString(result["hashpassword"]);
                        string hashed = ComputeSha256Hash(pass);
                        if (pass_db == hashed)
                        {
                            valid = true;
                        }
                    }
                con.CloseConnetion(); 

                }
            return valid;
            }
    }
}
