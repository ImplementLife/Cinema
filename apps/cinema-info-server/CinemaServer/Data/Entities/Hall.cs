using CinemaServer.Entities;

namespace CinemaServer.Data.Entities
{
    public class Hall
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; } 
        public int Rows { get; set; }
        public int Columns { get; set; }
        public int AllPlaces { get; set; }
        public ICollection<Session> Sessions { get; set; }

    }
}
