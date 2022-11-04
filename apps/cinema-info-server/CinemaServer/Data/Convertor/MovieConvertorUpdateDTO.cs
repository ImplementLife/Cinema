using CinemaServer.Data.DTO;
using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Entities;

namespace CinemaServer.Data.Convertor
{
    public class MovieConvertorUpdateDTO : IBaseConvertor<Movie, DTOAdminUpdate>
    {
        public Movie Convert(DTOAdminUpdate dto)
        {
            throw new NotImplementedException();
        }
        public DTOAdminUpdate Convert(Movie bases)
        {
            DTOAdminUpdate DAU = new();
            if(bases!=null)
            {
                DAU.Id = bases.Id;
                DAU.Name = bases.Name;
                DAU.Description = bases.Description;
                DAU.NameImg = bases.NameImg;
                DAU.trailerURL = bases.trailerURL;
                DAU.Duration = bases.Duration;
                DAU.Tags = new(bases.Tags);
            }
            else
            {
                DAU.Id = 0;
                DAU.Name = "Фильм не найден";
            }
            return DAU;
        }
        public List<Movie> Convert(List<DTOAdminUpdate> dtos)
        {
            throw new NotImplementedException();
        }
        public List<DTOAdminUpdate> Convert(List<Movie> dtos)
        {
            throw new NotImplementedException();
        }
    }
}
