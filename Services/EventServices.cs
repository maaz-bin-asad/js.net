using React5.Database;
using React5.Models;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using System.Threading.Tasks;

namespace React5.Services
{
    public class EventServices
    {
        public static IEnumerable<Event> GetAll()
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            List<Event> events = new List<Event>();
            string query = "SELECT * FROM events order by starttime DESC";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            SQLiteDataReader result = myCommand.ExecuteReader();
            if (result.HasRows)
            {
                while (result.Read())
                {
                    Event obj = new Event();
                    obj.eventid = result["eventid"].ToString();
                    obj.eventname = result["eventname"].ToString();
                    obj.eventtype = result["eventtype"].ToString();
                    obj.eventurl = result["eventurl"].ToString();
                    obj.duration = (long)result["duration"];
                    obj.starttime = result["starttime"].ToString();

                    events.Add(obj);
                }
            }
            con.CloseConnetion();
            return events;
        }

        public static void Add(Event newEvent)
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            string Query = "INSERT INTO events(`eventid`,`eventname`,`eventtype`,`eventurl`,`duration`,`starttime`) VALUES(@eventid,@eventname,@eventtype,@eventurl,@duration,@starttime)";
            SQLiteCommand InsertCommand = new SQLiteCommand(Query, con.myConnection);
            InsertCommand.Parameters.AddWithValue("@eventid", newEvent.eventid);
            InsertCommand.Parameters.AddWithValue("@eventname", newEvent.eventname);
            InsertCommand.Parameters.AddWithValue("@eventtype", newEvent.eventtype);
            InsertCommand.Parameters.AddWithValue("@eventurl", newEvent.eventurl);
            InsertCommand.Parameters.AddWithValue("@duration", newEvent.duration);
            InsertCommand.Parameters.AddWithValue("@starttime", newEvent.starttime);
            int res = InsertCommand.ExecuteNonQuery();
            con.CloseConnetion();
        }

    }
}
