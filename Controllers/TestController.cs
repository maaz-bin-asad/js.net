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
        public void CheckAnswer([FromQuery] string option, [FromQuery] string question_id, [FromQuery] string username)   //receiving query parameters from frontend
        {
            /*
            Console.WriteLine(option);
            Console.WriteLine(question_id);
            Console.WriteLine(username);
            */
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            string query = "SELECT * FROM quests where id=@question_id";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@question_id", question_id);
            SQLiteDataReader result = myCommand.ExecuteReader();
            string ans="";
            int score=0;
            if (result.HasRows)
            {
                while (result.Read())
                {
                    
                    ans = result["answer"].ToString();
                    score = Convert.ToInt32(result["points"]);    //storing the score that question carries

                }
            }
            con.CloseConnetion();
            if (ans == option)      //if user answer is equal to stored answer for that question
            {
                bool answered = false;   // flag variable to check if user has already answered the question
                con = new DatabaseCon();
                con.OpenConnection();
                query = "SELECT * FROM progress where username=@username AND questionid=@question_id";  //check if entry with same user and question exisits
                myCommand = new SQLiteCommand(query, con.myConnection);
                myCommand.Parameters.AddWithValue("@username", username);
                myCommand.Parameters.AddWithValue("@question_id", question_id);
                result = myCommand.ExecuteReader();
                if (result.HasRows)
                {
                    answered = true;
                }
                con.CloseConnetion();
                int rating = 0;
                con = new DatabaseCon();
                con.OpenConnection();
                query = "SELECT * FROM user where username=@username";
                myCommand = new SQLiteCommand(query, con.myConnection);
                myCommand.Parameters.AddWithValue("@username", username);
                result = myCommand.ExecuteReader();
                if (result.HasRows)
                {
                    while (result.Read())
                    {

                        rating = Convert.ToInt32(result["rating"]);
                        if (!answered)
                        {
                            rating += score;
                        }
                        Console.WriteLine(rating);

                    }
                }
                con.CloseConnetion();
                if (!answered)
                {
                    con = new DatabaseCon();
                    con.OpenConnection();
                    query = "UPDATE user SET rating=@rating WHERE username=@username";    //updating the rating
                    myCommand = new SQLiteCommand(query, con.myConnection);
                    myCommand.Parameters.AddWithValue("@rating", rating);
                    myCommand.Parameters.AddWithValue("@username", username);
                    result = myCommand.ExecuteReader();
                    con.CloseConnetion();
                }
                if (!answered)
                {
                    con = new DatabaseCon();
                    con.OpenConnection();
                    query = "INSERT INTO progress (username, questionid) VALUES (@username, @question_id)";
                    myCommand = new SQLiteCommand(query, con.myConnection);
                    myCommand.Parameters.AddWithValue("@username", username);
                    myCommand.Parameters.AddWithValue("@question_id", question_id);
                    result = myCommand.ExecuteReader();
                    con.CloseConnetion();
                }
                Console.WriteLine("Correct answer");
                //will add a redirect result that sends the redirect URL to the same page with query parameter telling that it was correct answer


            }
            else
            {
                Console.WriteLine("Wrong answer");
            }

        }


        [HttpPost]
        public IActionResult Create([FromBody] Test newQuiz)
        {
             TestServices.Add(newQuiz);
            return CreatedAtAction(nameof(Create), newQuiz);
        }


    }

}
