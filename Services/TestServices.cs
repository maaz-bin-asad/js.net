using React5.Database;
using React5.Models;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using System.Threading.Tasks;

namespace React5.Services
{
    public class TestServices
    {
        public static async Task<IEnumerable<string>> GetAll()
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            List<string> domains = new List<string>();
            string query = "SELECT DISTINCT domain FROM quests";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read())
                {
                    await Task.Delay(500);
                    domains.Add(result["domain"].ToString());
                }
            }
            con.CloseConnetion();
            return domains;
        }
        public static async Task<IEnumerable<Test>>GetAllQuest(string domain,string level)
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            List<Test> quests = new List<Test>();
            string query = "SELECT * FROM quests where domain=@domain OR level=@level";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            myCommand.Parameters.AddWithValue("@level", level);
            myCommand.Parameters.AddWithValue("@domain", domain);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read())
                {
                    await Task.Delay(500);
                    Test obj = new Test();
                    obj.id = result["id"].ToString();
                    obj.domain = result["domain"].ToString();
                    obj.level = result["level"].ToString();
                    obj.statement = result["statement"].ToString();
                    obj.points = (long)result["points"];
                    obj.option1 = result["option1"].ToString();
                    obj.option2 = result["option2"].ToString();
                    obj.option3 = result["option3"].ToString();
                    obj.option4 = result["option4"].ToString();

                    quests.Add(obj);

                }
            }
            con.CloseConnetion();
            return quests;

        }
        public static void Add(Test newQuiz)
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            string Query = "INSERT INTO quests(`id`, `level`, `domain`, `statement`, `answer`, `points`, `option1`, `option2`, `option3`, `option4`) VALUES(@id,@level,@domain,@statement,@answer,@points, @option1, @option2, @option3, @option4)";
            SQLiteCommand InsertCommand = new SQLiteCommand(Query, con.myConnection);
            InsertCommand.Parameters.AddWithValue("@id", newQuiz.id);
            InsertCommand.Parameters.AddWithValue("@level", newQuiz.level);
            InsertCommand.Parameters.AddWithValue("@domain", newQuiz.domain);
            InsertCommand.Parameters.AddWithValue("@statement", newQuiz.statement);
            InsertCommand.Parameters.AddWithValue("@answer", newQuiz.answer);
            InsertCommand.Parameters.AddWithValue("@points", newQuiz.points);
            InsertCommand.Parameters.AddWithValue("@option1", newQuiz.option1);
            InsertCommand.Parameters.AddWithValue("@option2", newQuiz.option2);
            InsertCommand.Parameters.AddWithValue("@option3", newQuiz.option3);
            InsertCommand.Parameters.AddWithValue("@option4", newQuiz.option4);
            int res = InsertCommand.ExecuteNonQuery();
            con.CloseConnetion();
        }
    }
}
