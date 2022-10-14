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
            return Json("Maine");
        }
        [HttpGet("/Main/Movies")]       
        public IActionResult Movies()
        {            
            return Json(CinemaService.MainCinema());
        }
    }
}
