using CinemaServer.Data.DTO;
using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Entities;
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
        public JObject FormCollectionToJson(IFormCollection obj)
        {
            dynamic json = new JObject();
            if (obj.Keys.Any())
            {
                foreach (string key in obj.Keys)
                {                 
                    if (obj[key].Count > 1)
                    {
                        JArray array = new JArray();
                        for (int i = 0; i < obj[key].Count; i++)
                        {
                            array.Add(obj[key][i]);
                        }
                        json.Add(key, array);
                    }
                    else
                    {
                        var value = obj[key][0];
                        json.Add(key, value);
                    }
                }
            }
            return json;
        }
    }
}
