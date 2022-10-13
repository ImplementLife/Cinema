using CinemaServer.Entities;
using CinemaServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace CinemaServer.Controllers
{
    [ApiController]
    public class AdminController : Controller
    {
        CinemaService CinemaService;
        public AdminController(CinemaService cinemaService)
        {
            CinemaService = cinemaService;
        }

        [HttpPost("Admin/AddMovie")]
        public IActionResult AddMovie(Movie movie)
        {
            CinemaService.AddMovie(movie);
            return Json($"Add: Удачно.");
        }
        [HttpGet("Admin/AllTags")]
        public IActionResult AllTags()
        {
            return Json(CinemaService.AllTags());
        }

    }
}
