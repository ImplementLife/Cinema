using CinemaServer.Data.DTO;
using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CinemaServer.Data.Convertor
{
    public class MovieConvertor : IBaseConvertor<Movie, DTOMainInfoMovie>
    {
        public Movie Convert(DTOMainInfoMovie dto)
        {
           Movie movie = new Movie();
            return movie;           
        }

        public DTOMainInfoMovie Convert(Movie movie)
        {            
            DTOMainInfoMovie dTOMovie = new();
            dTOMovie.Id = movie.Id;
            dTOMovie.Name = movie.Name;
            dTOMovie.NameImg = movie.NameImg;           
            return dTOMovie;
        }
    }
}
