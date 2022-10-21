using CinemaServer.Data.DTO;
using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Data.Entities;

namespace CinemaServer.Entities
{
    public class Movie 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }        
        public string? trailerURL { get; set; }
        public int? Duration { get; set; }
        public string? NameImg { get; set; }
        public ICollection<Tag>? Tags { get; set; }        
        public ICollection<Session>? Sessions { get; set; }
        public DateTime? DateCreate { get; set; }
    }
}
