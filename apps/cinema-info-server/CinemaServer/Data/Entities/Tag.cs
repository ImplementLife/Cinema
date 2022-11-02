using CinemaServer.Data.DTO.InterfaceDTO;
using Newtonsoft.Json;

namespace CinemaServer.Entities
{
    public class Tag : ITagDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public ICollection<Movie>? Movies { get; set; }
    }
}
