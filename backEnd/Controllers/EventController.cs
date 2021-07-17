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
       /* public async Task<IEnumerable<Event>> Get()*/
         public IEnumerable<Event> Get()
        {
            /* return await EventServices.GetAll();*/
            return EventServices.GetAll();
         }

        [HttpPost]
        public string create([FromBody] Event newEvent)
        {
           return EventServices.Add(newEvent);
           
        }
        [HttpGet]
        [Route("getEvent/{id}")]
        public Event GetEvent(string id)
        {
            return EventServices.GetEvent(id);
        }
        [HttpPost]
        [Route("registerForEvent")]
        public string RegisterForEvent([FromBody] EventActivity newEntry)
        {
            return EventServices.RegisterForEvent(newEntry);
            
        }
    }
}
