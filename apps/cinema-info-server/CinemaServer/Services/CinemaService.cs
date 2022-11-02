using CinemaServer.Data;

using CinemaServer.Data.Convertor;
using CinemaServer.Data.DTO;
using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Data.Entities;
using CinemaServer.Entities;
using CinemaServer.Services.InterfaceServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace CinemaServer.Services
{

    public class CinemaService:ICinemaService
    {
        private readonly AppDbContext Context;
        public MovieConvertor movieConvertor = new();
        public FileStorageService FileStorageService = new();
        public CinemaService (AppDbContext appDb)
        {
            Context = appDb;            
        }
        
        public List<DTOMainInfoMovie> MainCinema()
        {                         
            var list = Context.Movies
                .Include(x => x.Sessions)
                .Include(x => x.Tags)
                .Where(x => x.Sessions.Count > 0)
                .Where(x => x.Sessions.Where(x=>x.ShowEndDate>DateTime.Now).Count()>0)
                .ToList();
            return movieConvertor.ConvertToList(list);
        }
        public Tag SaveTag(string name)
        {
            Tag tag = new();
            tag.Name = name;
            Context.Add(tag);
            Context.SaveChanges();
            return tag;
            
        }
        public Movie AddMovie(IFormCollection IFC)
        {
            Movie movie = JsonConvert.DeserializeObject<Movie>(IFC["movie"]);
            string nameimg = "Not-File";
            if (IFC.Files.Count > 0)
            {
                var file = IFC.Files[0];
                nameimg =FileStorageService.Upload(file);
            }
            movie.NameImg = nameimg;
            movie.DateCreate = DateTime.Now;            
            Context.Movies.UpdateRange(movie);
            Context.SaveChanges();
            return movie;
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
