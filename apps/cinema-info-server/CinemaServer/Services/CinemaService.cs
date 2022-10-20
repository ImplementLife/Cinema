using CinemaServer.Data;

using CinemaServer.Data.Convertor;
using CinemaServer.Data.DTO;
using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Data.Entities;
using CinemaServer.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System.Collections.Generic;
using System.Linq;

namespace CinemaServer.Services
{

    public class CinemaService:ICinemaService
    {
        private readonly AppDbContext Context;
        public CinemaService (AppDbContext appDb)
        {
            Context = appDb;
        }
        
        public List<IMovieMainPageInfoDTO<ITagDTO>> MainCinema()
        {   
            MovieConvertor MC = new();            
            var list = Context.Movies
                .Include(x => x.Sessions)
                .Include(x => x.Tags)
                .Where(x => x.Sessions.Count > 0)
                .Where(x => x.Sessions.Where(x=>x.ShowEndDate>DateTime.Now).Count()>0)
                .ToList();
            List<IMovieMainPageInfoDTO<ITagDTO>> ListDTO =new();            
            foreach (Movie movie in list)
            {
               ListDTO.Add(MC.Convert(movie));
            }
            return ListDTO;
        }
        public void AddMovie(Movie movie)
        {            
            movie.DateCreate = DateTime.Now;            
            Context.Movies.UpdateRange(movie);
            Context.SaveChanges();            
        }
        
        public List<ITagDTO> AllTags()
        {
            return new(Context.Tags.ToList());
        }
        public List<IHallDTO> AllHall()
        {
            return new(Context.Halls.ToList());
        }
        public List<Movie> AllMovie()
        {   
            return Context.Movies.ToList();
        }
    }
}
