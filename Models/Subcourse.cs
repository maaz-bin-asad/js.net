using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React5.Models
{
    public class Subcourse
    {
        public string subcourseid { get; set; } //Primary key
        public string subcoursename { get; set; } 
        public string subcourseurl { get; set; }
        public string description { get; set; } 
        public string courseid { get; set; } //Foreign key
    }
}
