using CinemaServer.Data.DTO.InterfaceDTO;

namespace CinemaServer.Data.DTO
{
    public class DTOMainInfoMovie: IMovieMainPageInfoDTO<ITagDTO>
    {
        public ICollection<ITagDTO>? Tags { get; set; }
        public int Id { get; set; }
        public string Name { get; set ; }
        public DateTime? DateCreate { get ; set ; }
        public string? NameImg { get ; set ; }
    }
}
