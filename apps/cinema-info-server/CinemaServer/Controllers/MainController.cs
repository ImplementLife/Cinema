using CinemaServer.Data;
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
        [HttpGet("/Main")]
        public IActionResult Main()
        {
            //CinemaService.AutoNamingUpdate();
            return Json("Maine");
        }
        [HttpGet("/main/movies")]       
        public IActionResult Movies()
        {            
            return Json(CinemaService.MainCinema());
        }
        [HttpGet("/main/movie")]
        public IActionResult MovieID(int id)
        {
            return Json(CinemaService.GetMovie(id));
        }

    }
}
