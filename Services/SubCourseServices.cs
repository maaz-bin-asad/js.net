using System;
using System.Collections.Generic;
using System.Data.SQLite;
using React5.Database;
using React5.Models;

namespace React5.Services
{
    public class SubCourseServices
    {

        public static void Add(Subcourse newSubcourse)
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            string Query = "INSERT INTO subcourses(`subcourseid`,`subcoursename`,`courseid`) VALUES(@subcourseid,@subcoursename,@courseid)";
            SQLiteCommand InsertCommand = new SQLiteCommand(Query, con.myConnection);
            InsertCommand.Parameters.AddWithValue("@subcourseid", newSubcourse.subcourseid);
            InsertCommand.Parameters.AddWithValue("@subcoursename", newSubcourse.subcoursename);
            InsertCommand.Parameters.AddWithValue("@courseid", newSubcourse.courseid);

            int res = InsertCommand.ExecuteNonQuery();
            con.CloseConnetion();
        }

        public static IEnumerable<Subcourse> GetSubCourses()
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            List<Subcourse> subCourses = new List<Subcourse>();
            string query = "SELECT subcoursename,subcourseurl,description FROM subcourses";

            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read())
                {
                    Subcourse obj = new Subcourse();
                    obj.subcoursename = result["subcoursename"].ToString();
                    obj.subcourseurl = result["subcourseurl"].ToString();
                    obj.description = result["description"].ToString();
                    subCourses.Add(obj);
                }
            }
            con.CloseConnetion();
            return subCourses;

        }
        public static IEnumerable<Subcourse> GetMainCourse(string id)
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            List<Subcourse> subCourses = new List<Subcourse>();
            //joining two tabels for getting data from both tables
            string query = "SELECT subcoursename,subcourseurl,description,coursename FROM subcourses INNER JOIN courses ON courses.courseid=subcourses.courseid WHERE subcourses.courseid=@id";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@id", id);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read())
                {
                    Subcourse obj = new Subcourse();
                    obj.subcoursename = result["subcoursename"].ToString();
                    obj.subcourseurl = result["subcourseurl"].ToString();
                    obj.description = result["description"].ToString();
                    obj.coursename = result["coursename"].ToString();
                    subCourses.Add(obj);
/*                    Console.WriteLine(obj.subcoursename, obj.coursename);*/
                }
            }
            con.CloseConnetion();
            return subCourses;
        }
    }
}
