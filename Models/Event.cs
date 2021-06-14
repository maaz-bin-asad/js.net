using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React5.Models
{
    public class Event
    {
        public string EventId { get; set; }
        public string EventName { get; set; }
        public string EventType { get; set; }
        public string EventURL { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

    }
}
