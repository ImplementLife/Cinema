using CinemaServer.Data.DTO;
using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Entities;

namespace CinemaServer.Data.Convertor
{
    public class MovieConvertor : IBaseConvertor<Movie, DTOMainInfoMovie>
    {
        public Movie Convert(DTOMainInfoMovie dto)
        {
            throw new NotImplementedException();
        }

        public DTOMainInfoMovie Convert(Movie movie)
        {
            DTOMainInfoMovie dTOMovie = new();
            dTOMovie.Id = movie.Id;
            dTOMovie.Name = movie.Name;
            dTOMovie.NameImg = movie.NameImg;           
            dTOMovie.DateCreate = movie.DateCreate;
            dTOMovie.Tags = new List<ITagDTO>(movie.Tags);
            return dTOMovie;
        }
    }
}
