using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using React5.Models;
using System;
using React5.Database;
using React5.Services;

namespace React5.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class CourseController : ControllerBase
    {
        public CourseController()
        {
        }
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return CourseServices.GetAll();
        }

        [HttpGet]
        [Route("getbydomain/{Domain}")]
        public IEnumerable<Course> GetByDomain(string Domain)
        {
            return CourseServices.GetByDoamin(Domain);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Course newCourse)
        {
            CourseServices.Add(newCourse);
            return CreatedAtAction(nameof(Create), newCourse);

        }

      


    }
}

/*
 Test credentials
 ezio@assasinscreeed.com
jhewe
*/