using System;
using System.Collections.Generic;
using System.Data.SQLite;
using React5.Database;
using React5.Models;


namespace React5.Services
{
    public class CourseServices
    {
        public static IEnumerable<Course> GetAll()
        {
            DatabaseCon con = new DatabaseCon();
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
                    obj.courseid = result["courseid"].ToString();
                    obj.coursename = result["coursename"].ToString();
                    obj.courserating = (double)result["courserating"];
                    obj.coursedomain = result["coursedomain"].ToString();
                    obj.courseurl = result["courseurl"].ToString();
                    courses.Add(obj);
                }
            }
            con.CloseConnetion();
            return courses;
        }

        public static void Add(Course newCourse)
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            string Query = "INSERT INTO courses(`courseid`,`coursename`,`courserating`,`coursedomain`,`courseurl`) VALUES(@courseid,@coursename,@courserating,@coursedomain,@courseurl)";
            SQLiteCommand InsertCommand = new SQLiteCommand(Query, con.myConnection);
            InsertCommand.Parameters.AddWithValue("@courseid", newCourse.courseid);
            InsertCommand.Parameters.AddWithValue("@coursename", newCourse.coursename);
            InsertCommand.Parameters.AddWithValue("@courserating", newCourse.courserating);
            InsertCommand.Parameters.AddWithValue("@coursedomain", newCourse.coursedomain);
            InsertCommand.Parameters.AddWithValue("@courseurl", newCourse.courseurl);
            int res = InsertCommand.ExecuteNonQuery();
            con.CloseConnetion();
        }

        public static IEnumerable<Course>GetByDoamin(string Domain)
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            List<Course> courses = new List<Course>();
            string query = "SELECT * FROM courses WHERE coursedomain=@domain";

            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@domain", Domain);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read())
                {
                    Course obj = new Course();
                    obj.courseid = result["courseid"].ToString();
                    obj.coursename = result["coursename"].ToString();
                    obj.courserating = (double)result["courserating"];
                    obj.coursedomain = result["coursedomain"].ToString();
                    obj.courseurl = result["courseurl"].ToString();
                    courses.Add(obj);
                }
            }
            con.CloseConnetion();
            return courses;
        }
    }
}
