using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using React5.Models;
using React5.Services;

namespace React5.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        public UserController()
        {
        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new User
            {
                name = "Ezio",
                email = "maazbinasad29@gmail.com"
            })
            .ToArray();
        }

        [HttpPost]
        public IActionResult Insert([FromBody] User user)

        {
            return CreatedAtAction(nameof(Insert), user.name);
            
        }


    }
}