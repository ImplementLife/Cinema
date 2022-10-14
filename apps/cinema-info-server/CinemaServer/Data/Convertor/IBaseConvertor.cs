namespace CinemaServer.Data.Convertor
{
    public interface IBaseConvertor<Base,DTO>
    {
        public Base Convert(DTO dto);
        public DTO Convert(Base bases);

    }
}
