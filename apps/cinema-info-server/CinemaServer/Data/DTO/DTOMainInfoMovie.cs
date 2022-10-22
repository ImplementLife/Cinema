using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Data.Entities;
using CinemaServer.Entities;

namespace CinemaServer.Data.DTO
{
    public class DTOMainInfoMovie:Movie
    {       
        public int Id { get; set; }
        public string Name { get; set ; }        
        public string? NameImg { get ; set ; }        
        
    }
}
