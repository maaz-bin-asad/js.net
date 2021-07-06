using Microsoft.AspNetCore.Mvc;
using React5.Models;
using React5.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SQLite;
using React5.Database;

namespace React5.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<string>> Get()
        {
            List<string> domains = new List<string>();
            try
            {
                 domains= (List<string>)await TestServices.GetAll();
            }
            catch(Exception ex)
            {
                domains.Add(ex.Message);
            }
            return domains;
        }
        [HttpGet]
        [Route("getTest")]
        public async Task<IEnumerable<Test>>GetAllquest([FromQuery] string domain,[FromQuery] string level)
        {
          
                Console.WriteLine(domain + "  " + level);
              return await TestServices.GetAllQuest(domain, level);
           
        }
        [HttpGet]
        [Route("checkAnswer")]    //Route to check correct answer and update rating of the user
        public bool CheckAnswer([FromQuery] string option, [FromQuery] string question_id, [FromQuery] string username)   //receiving query parameters from frontend
        {
            return TestServices.CheckAnswer(option, question_id, username);

        }


        [HttpPost]
        public IActionResult Create([FromBody] Test newQuiz)
        {
             TestServices.Add(newQuiz);
            return CreatedAtAction(nameof(Create), newQuiz);
        }


    }

}
