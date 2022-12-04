using CinemaServer.Entities;
using System.Data;

namespace CinemaServer.Data.Entities
{
    public class Ticket
    {
        public int Id { get; set; }
        public DateTime CreateTicket { get; set; }
        public int? UserId { get; set; }
        public virtual User User { get; set; }
        public int? SessionId { get; set; }
        public virtual Session Session { get; set; }
    }
}
