namespace CinemaServer.Data.DTO.InterfaceDTO
{
    public interface IMovieMainPageInfoDTO<T> where T : ITagDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<T> Tags { get; set; }
        public DateTime? DateCreate { get; set; }
        public string? NameImg { get; set; }

    }
}
