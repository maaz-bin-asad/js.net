using Microsoft.AspNetCore.Mvc;
using React5.Models;
using React5.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React5.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class EventController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return EventServices.GetAll();
        }


        [HttpPost]
        public IActionResult create([FromBody] Event newEvent)
        {
            EventServices.Add(newEvent);
            return CreatedAtAction(nameof(create), newEvent);
        }
        [HttpGet]
        [Route("getEvent/{id}")]
        public Event GetCourse(string id)
        {
            return EventServices.GetEvent(id);
        }
    }
}
