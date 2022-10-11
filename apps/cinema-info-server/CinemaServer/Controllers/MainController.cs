using CinemaServer.Data;
using CinemaServer.Data.Interface;
using CinemaServer.Entities;
using CinemaServer.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CinemaServer.Controllers
{
    [ApiController]
    public class MainController : Controller
    {
        CinemaService CinemaService = new();
        private readonly AppDbContext _context;
        public MainController(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }
        [HttpGet("/main/movies")]       
        public IActionResult Sesions()
        {            
            return Json(CinemaService.MainCinema(_context));
        }
        [HttpGet("/Add")]
        public IActionResult AllFilms()
        {            
            string nameimg = "NameImg";
            Random random = new Random();
            Movie movie = new Movie();
            movie.Name = random.Next(0, 10000).ToString();
            movie.Description = random.Next(0, 1000).ToString();
            movie.DateCreate = DateTime.Now;
            movie.NameImg = nameimg + random.Next(0, 9999999)+".png";
            CinemaService.AddMovie(_context,movie);
            return Json($"Add:{movie}");
        }

    }
}
