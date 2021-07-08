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
        /* public static async Task<IEnumerable<Event>> GetAll()*/
        public static IEnumerable<Event>GetAll()
        {
            DatabaseCon con = new DatabaseCon();
            con.OpenConnection();
            List<Event> events = new List<Event>();
            string query = "SELECT * FROM events order by starttime DESC";
            SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
            SQLiteDataReader result = myCommand.ExecuteReader();
          /*  await Task.Delay(1000);*/
            if (result.HasRows)
            {
                while (result.Read())
                {
                    Event obj = new Event();
                    /*await Task.Delay(500);*/
                    obj.eventid = result["eventid"].ToString();
                    obj.eventname = result["eventname"].ToString();
                    obj.eventtype = result["eventtype"].ToString();
                    obj.videourl = result["videourl"].ToString();
                    obj.duration = (long)result["duration"];
                    obj.starttime = result["starttime"].ToString();
                    obj.numberofattendees = (int)result["numberofattendees"];

                    events.Add(obj);
                }
            }
            con.CloseConnetion();
            return events;
        }

        public static string Add(Event newEvent)
        {
            string Message = "Inserted";
            DatabaseCon con = new DatabaseCon();
            try
            {
                con.OpenConnection();
                string Query = "INSERT INTO events(`eventid`,`eventname`,`eventtype`,`videourl`,`duration`,`starttime`) VALUES(@eventid,@eventname,@eventtype,@videourl,@duration,@starttime)";
                SQLiteCommand InsertCommand = new SQLiteCommand(Query, con.myConnection);
                InsertCommand.Parameters.AddWithValue("@eventid", newEvent.eventid);
                InsertCommand.Parameters.AddWithValue("@eventname", newEvent.eventname);
                InsertCommand.Parameters.AddWithValue("@eventtype", newEvent.eventtype);
                InsertCommand.Parameters.AddWithValue("@videourl", newEvent.videourl);
                InsertCommand.Parameters.AddWithValue("@duration", newEvent.duration);
                InsertCommand.Parameters.AddWithValue("@starttime", newEvent.starttime);
                int res = InsertCommand.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Message = "Something went wrong";

            }
            finally
            {
                con.CloseConnetion();
            }
            return Message;
        }

        public static Event GetEvent(string id)
        {
            DatabaseCon con = new DatabaseCon();
            Event obj = new Event();
            try
            {
                con.OpenConnection();
              
                string query = "SELECT * FROM events where eventid=@id";
                SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
                myCommand.Parameters.AddWithValue("@id", id);
                SQLiteDataReader result = myCommand.ExecuteReader();
                if (result.HasRows)
                {
                    while (result.Read())
                    {

                        obj.eventid = result["eventid"].ToString();
                        obj.eventname = result["eventname"].ToString();
                        obj.eventtype = result["eventtype"].ToString();
                        obj.videourl = result["videourl"].ToString();
                        obj.duration = (long)result["duration"];
                        obj.starttime = result["starttime"].ToString();
                        obj.numberofattendees = (int)result["numberofattendees"];
                    }
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);

            }
            finally
            {
                con.CloseConnetion();
            }
            return obj;

        }
        public static string RegisterForEvent(EventActivity newEntry)
        {
            string Message = "Thank you";
            DatabaseCon con = new DatabaseCon();
            try
            {
                con.OpenConnection();
                long total = 0;
                string query = "INSERT INTO eventactivity(mail,eventid) VALUES(@mail,@eventid)";
                SQLiteCommand InsertCommand = new SQLiteCommand(query, con.myConnection);
                InsertCommand.Parameters.AddWithValue("@mail", newEntry.mail);
                InsertCommand.Parameters.AddWithValue("@eventid", newEntry.eventid);
                int res = InsertCommand.ExecuteNonQuery();
                query = "SELECT numberofattendees FROM events WHERE eventid=@eventid";
                SQLiteCommand myCommand = new SQLiteCommand(query, con.myConnection);
                myCommand.Parameters.AddWithValue("@eventid", newEntry.eventid);
                SQLiteDataReader result = myCommand.ExecuteReader();
                if (result.HasRows)
                {
                    while (result.Read())
                    {
                        total=(long)result["numberofattendees"];
                        total += 1;
                    }
                }
                myCommand = new SQLiteCommand(query, con.myConnection);
                query = "UPDATE events SET numberofattendees=@total WHERE eventid=@eventid";
                myCommand.Parameters.AddWithValue("@eventid", newEntry.eventid);
                myCommand.ExecuteNonQuery();
         }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message,ex.StackTrace);
               
                Message = "Something went wrong!";
            }
            finally {
              con.CloseConnetion();
            }
            return Message;
        }
    }
}

