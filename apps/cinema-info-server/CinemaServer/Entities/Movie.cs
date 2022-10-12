using CinemaServer.Data.Interface;

namespace CinemaServer.Entities
{
    public class Movie : IMovieDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }        
        public string? URLtrailer { get; set; }
        public string? NameImg { get; set; }
        public ICollection<Tag>? Tags { get; set; }
        public DateTime? DateCreate { get; set; }
        
    }
}
