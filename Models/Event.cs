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
        public string eventtype { get; set; }
        public string videourl { get; set; }
        public string starttime { get; set; }
        public long duration { get; set; }
        public long numberofattendees { get; set; }

    }
}
