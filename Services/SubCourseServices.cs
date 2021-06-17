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
    }
}
