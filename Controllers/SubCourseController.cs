using Microsoft.AspNetCore.Mvc;
using React5.Database;
using React5.Models;
using React5.Services;
using System.Collections.Generic;
using System.Data.SQLite;
namespace React5.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubCourseController : ControllerBase
    {
        [HttpGet]
        [Route("{id}")]
        public IEnumerable<Subcourse> GetMainCourse(string id)
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            List<Subcourse> subCourses = new List<Subcourse>();
            string query = "SELECT * FROM subcourses WHERE courseid=@id";

            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@id", id);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read())
                {
                    Subcourse obj = new Subcourse();
                    obj.subcourseid = result["subcourseid"].ToString();
                    obj.subcoursename = result["subcoursename"].ToString();
                    obj.courseid = result["courseid"].ToString();
                    obj.subcourseurl = result["subcourseurl"].ToString();
                    obj.description = result["description"].ToString();
                    subCourses.Add(obj);
                }
            }
            con.CloseConnetion();
            return subCourses;

        }

        [HttpPost]
        public IActionResult Create([FromBody] Subcourse newSubcourse)
        {
            SubCourseServices.Add(newSubcourse);
            return CreatedAtAction(nameof(Create), newSubcourse);

        }
    }
}
