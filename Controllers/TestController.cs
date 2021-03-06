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
        [HttpGet]      //Roue to get all questions
        public async Task<IEnumerable<string>> Get()
        {
            List<string> domains = new List<string>();
            try
            {
                 domains= (List<string>) await TestServices.GetAll();
            }
            catch(Exception ex)
            {
                domains.Add(ex.Message);
            }
            return domains;
        }
        [HttpGet]

        [Route("getQuestions")]  //Route to get all questions by domain and difficulty level
        public async Task<IEnumerable<Test>>GetAllquest([FromQuery] string domain,[FromQuery] string level)
        {
          
              return await TestServices.GetAllQuest(domain, level);
           
        }
        [HttpGet]
        [Route("getTest/{domain}")]  //Route to get all questions by domain
        public IActionResult AddQueryParameters(string domain, [FromQuery] string level)
        {

            return LocalRedirect("/userpage/quiz/mainquiz?domain="+domain+"&level="+level);

        }
        [HttpGet]

        [Route("checkAnswer")]    //Route to check correct answer and update rating of the user
        public IActionResult CheckAnswer([FromQuery] string option, [FromQuery] string question_id, [FromQuery] string username, [FromQuery]  string domain, [FromQuery] string level)   //receiving query parameters from frontend
        {
            if (TestServices.CheckAnswer(option, question_id, username))
            {
                return LocalRedirect("/userpage/quiz/mainquiz?domain="+domain+"&level="+level+"&correct=1");
            }
            else
            {
                return LocalRedirect("/userpage/quiz/mainquiz?domain=" + domain + "&level=" + level + "&correct=0");
            }
        }


        [HttpPost]     // Route to add new question
        public IActionResult Create([FromBody] Test newQuiz)
        {
             TestServices.Add(newQuiz);
            return CreatedAtAction(nameof(Create), newQuiz);
        }


    }

}
