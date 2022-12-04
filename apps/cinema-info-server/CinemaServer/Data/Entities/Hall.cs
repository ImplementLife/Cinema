using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Entities;
using System.Numerics;

namespace CinemaServer.Data.Entities
{
    public class Hall:IHallDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; } 
        public int RowsCount { get; set; }
        public int RowsPlaces { get; set; }    
        public DateTime TimeOpen { get; set; }
        public DateTime TimeClose { get; set; }
        public ICollection<Session>? Sessions { get; set; }

    }
}
