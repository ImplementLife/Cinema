namespace CinemaServer.Data.DTO.InterfaceDTO
{
    public interface ISessionDTO
    {
        public int Id { get; set; }
        public DateTime ShowStartDate { get; set; }
        public DateTime ShowEndDate { get; set; }
    }
}
