using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Data.Entities;

namespace CinemaServer.Data.DTO
{
    public class DTOMainInfoMovie: IMovieMainPageInfoDTO<ITagDTO>
    {
        public ICollection<ITagDTO>? Tags { get; set; }
        public int Id { get; set; }
        public string Name { get; set ; }        
        public string? NameImg { get ; set ; }
        public ICollection<ISessionDTO> Sessions { get; set; }
        
    }
}
