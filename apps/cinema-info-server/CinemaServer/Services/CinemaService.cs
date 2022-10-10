using CinemaServer.Data;
using CinemaServer.Data.Interface;
using CinemaServer.Entities;

namespace CinemaServer.Services
{
    public class CinemaService:ICinemaService
    {
        public List<IMovieDTO> MainCinema()
        {
            using AppDbContext AC = new();                       
            List<IMovieDTO> listI = new List<IMovieDTO>(AC.Movies.ToList());           
            return listI;
        }
        public void AddMovie(Movie Movie)
        {
            using AppDbContext AC = new();
            AC.Movies.Add(Movie);
            AC.SaveChanges();            
        }
    }
}
