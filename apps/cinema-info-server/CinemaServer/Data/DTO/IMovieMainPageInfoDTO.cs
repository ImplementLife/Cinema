using CinemaServer.Entities;

namespace CinemaServer.Data.Interface
{
    public interface IMovieMainPageInfoDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Tag> Tags { get; set; }        
        public DateTime? DateCreate { get; set; }
        public string? NameImg { get; set; } 
    }
}
