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
                    obj.coursedomain = result["coursedomain"].ToString();
                    obj.course_difficulty = result["course_difficulty"].ToString();
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
            string Query = "INSERT INTO courses(`courseid`,`coursename`,`coursedomain`,`course_difficulty`) VALUES(@courseid,@coursename,@coursedomain,@course_difficulty)";
            SQLiteCommand InsertCommand = new SQLiteCommand(Query, con.myConnection);
            InsertCommand.Parameters.AddWithValue("@courseid", newCourse.courseid);
            InsertCommand.Parameters.AddWithValue("@coursename", newCourse.coursename);
            InsertCommand.Parameters.AddWithValue("@coursedomain", newCourse.coursedomain);
            InsertCommand.Parameters.AddWithValue("@course_difficulty", newCourse.course_difficulty);
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
                    obj.coursedomain = result["coursedomain"].ToString();
                    obj.course_difficulty = result["course_difficulty"].ToString();
                    courses.Add(obj);
                }
            }
            con.CloseConnetion();
            return courses;
        }
    }
}
