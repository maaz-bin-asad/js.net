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
        [HttpGet]    //Route to get all sub courses
        public IEnumerable<Subcourse> GetSubCourses()
        {
            return SubCourseServices.GetSubCourses();
        }
        [HttpGet]
        [Route("{id}")]
        public IEnumerable<Subcourse> GetMainCourse(string id)
        {
            return SubCourseServices.GetMainCourse(id);


        }
        [HttpPost]
        public IActionResult Create([FromBody] Subcourse newSubcourse)
        {
            SubCourseServices.Add(newSubcourse);
            return CreatedAtAction(nameof(Create), newSubcourse);

        }
    }

}
