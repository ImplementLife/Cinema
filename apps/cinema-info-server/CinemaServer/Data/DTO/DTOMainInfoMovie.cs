using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Data.Entities;

namespace CinemaServer.Data.DTO
{
    public class DTOMainInfoMovie
    {       
        public int Id { get; set; }
        public string Name { get; set ; }        
        public string? NameImg { get ; set ; }        
        
    }
}
