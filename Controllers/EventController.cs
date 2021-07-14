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

        [HttpPost]                      // Route to post new event
        public string create([FromBody] Event newEvent)
        {
           return EventServices.Add(newEvent);
           
        }
        [HttpGet]
        [Route("getEvent/{id}")]         // Route to get event by ID
        public Event GetEvent(string id)
        {
            return EventServices.GetEvent(id);
        }
        [HttpPost]
        [Route("registerForEvent")]      // Route to register for the event
        public string RegisterForEvent([FromBody] EventActivity newEntry)
        {
            return EventServices.RegisterForEvent(newEntry);
            
        }
    }
}
