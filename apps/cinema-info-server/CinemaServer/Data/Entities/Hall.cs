using CinemaServer.Entities;

namespace CinemaServer.Data.Entities
{
    public class Hall
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Places { get; set; }
        public ICollection<Session> Sessions { get; set; }

    }
}
