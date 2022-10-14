using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Entities;

namespace CinemaServer.Data.Entities
{
    public class Session : ISessionDTO
    {
        public int Id { get; set; }        
        public DateTime ShowStartDate { get; set; }
        public DateTime ShowEndDate { get; set; }
        public int? HallId { get; set; }
        public virtual Hall Hall { get; set; }
        public int? MovieId { get; set; }
        public virtual Movie Movie { get; set; }
    }
}
