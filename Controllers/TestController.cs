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
        [Route("checkAnswer")]
        public RedirectResult CheckAnswer([FromQuery] string option, [FromQuery] string question_id, [FromQuery] string user_id)
        {
            Console.WriteLine(option);
            Console.WriteLine(question_id);
            Console.WriteLine(user_id);
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            string query = "SELECT * FROM quests where id=@question_id";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@question_id", question_id);
            SQLiteDataReader result = myCommand.ExecuteReader();
            string ans="";
            if (result.HasRows)
            {
                while (result.Read())
                {
                    
                    ans = result["answer"].ToString();

                }
            }
            con.CloseConnetion();
            if (ans == option)
            {
                
                return Redirect("/?correct=1");



            }
            return Redirect("/?correct=0");

        }


        [HttpPost]
        public IActionResult Create([FromBody] Test newQuiz)
        {
             TestServices.Add(newQuiz);
            return CreatedAtAction(nameof(Create), newQuiz);
        }


    }

}
