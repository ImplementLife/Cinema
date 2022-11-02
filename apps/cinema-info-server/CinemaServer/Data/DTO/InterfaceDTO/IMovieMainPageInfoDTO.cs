using CinemaServer.Data.Entities;

namespace CinemaServer.Data.DTO.InterfaceDTO
{
    public interface IMovieMainPageInfoDTO<T> where T : ITagDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<T> Tags { get; set; }
        public ICollection<ISessionDTO> Sessions { get; set; }
        public string? NameImg { get; set; }

    }
}
