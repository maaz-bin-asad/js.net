using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React5.Models
{
    public class Event
    {
        public string eventid { get; set; }
        public string eventname { get; set; }
        public string eventType { get; set; }
        public string eventurl { get; set; }
        public DateTime starttime { get; set; }
        public DateTime endtime { get; set; }

    }
}
