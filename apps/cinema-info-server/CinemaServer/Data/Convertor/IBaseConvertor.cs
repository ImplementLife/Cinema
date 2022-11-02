namespace CinemaServer.Data.Convertor
{
    public interface IBaseConvertor<Base,DTO>
    {
        public Base Convert(DTO dto);
        public DTO Convert(Base bases);
        public List<Base> Convert(List<DTO> dtos);
        public List<DTO> Convert(List<Base> dtos);
    }
}
