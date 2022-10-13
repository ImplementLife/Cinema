namespace CinemaServer.Entities
{
    public class Tag : ITagDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Movie>? Movies { get; set; }
    }
}
