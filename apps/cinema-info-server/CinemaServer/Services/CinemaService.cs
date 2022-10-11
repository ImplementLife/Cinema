using CinemaServer.Data;
using CinemaServer.Data.Interface;
using CinemaServer.Entities;

namespace CinemaServer.Services
{
    public class CinemaService:ICinemaService
    {
        public List<IMovieDTO> MainCinema(AppDbContext AC)
        {
                                
            List<IMovieDTO> listI = new List<IMovieDTO>(AC.Movies.ToList());
            
            return listI;
        }
        public void AddMovie(AppDbContext AC, Movie Movie)
        {            
            AC.Movies.Add(Movie);
            AC.SaveChanges();            
        }
    }
}
