using CinemaServer.Entities;

namespace CinemaServer.Data.Entities
{
    public class Session
    {
        public int Id { get; set; }        
        public DateTime TimeSession { get; set; }
        public int? HallId { get; set; }
        public virtual Hall Hall { get; set; }
        public int? MovieId { get; set; }
        public virtual Movie Movie { get; set; }
    }
}
