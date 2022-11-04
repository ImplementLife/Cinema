using CinemaServer.Data.DTO.InterfaceDTO;

namespace CinemaServer.Data.DTO
{
    public class DTOAdminUpdate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? trailerURL { get; set; }
        public int? Duration { get; set; }
        public string? NameImg { get; set; }
        public List<ITagDTO> Tags { get; set; }
    }
}
