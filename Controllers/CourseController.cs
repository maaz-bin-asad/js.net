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

    public class CourseController : ControllerBase
    {
        DatabaseCon con = new DatabaseCon();
        public CourseController()
        {
        }
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            con.OpenConnection();
            List<Course> courses = new List<Course>();
            string query = "SELECT * FROM courses";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read())
                {
                    Course obj = new Course();
                    obj.coursename = result["coursename"].ToString();
                    obj.coursedomain = result["coursedomain"].ToString();
                    courses.Add(obj);
                }
            }
            con.CloseConnetion();
            return courses;
        }


    }
}

/*
 Test credentials
 ezio@assasinscreeed.com
jhewe
*/