using React5.Models;
using System.Collections.Generic;
using System.Linq;

namespace React5.Services
{
    public static class UserService
    {
        static List<User> Users { get; }
        static int nextId = 3;
        static UserService()
        {
            Users = new List<User>
            {
                new User { id = 1, name = "js.NET", email = "maazbinasad29@gmail.com", password="123" }
            };
        }

        public static IEnumerable<User> GetAll() => Users;

        public static User Get(int id) => Users.FirstOrDefault(p => p.id == id);

        public static void Add(User user)
        {
            user.id = nextId++;
            Users.Add(user);
        }

        public static void Delete(int id)
        {
            var user = Get(id);
            if (user is null)
                return;

            Users.Remove(user);
        }

        public static void Update(User user)
        {
            var index = Users.FindIndex(p => p.id == user.id);
            if (index == -1)
                return;

            Users[index] = user;
        }
    }
}