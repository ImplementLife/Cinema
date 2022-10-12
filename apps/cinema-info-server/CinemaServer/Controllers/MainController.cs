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
        CinemaService CinemaService;
       
        public MainController(CinemaService cinemaService)
        {
            CinemaService = cinemaService;         
        }

        [HttpGet("/main/movies")]       
        public IActionResult GetTop10Movie()
        {            
            return Json(CinemaService.MainCinema());
        }
        [HttpPost("/admin/add")]
        public IActionResult AddMovie(Movie movie)
        {
            
            CinemaService.AddRandomMovie();
            return Json($"Add: Удачно.");
        }

    }
}
