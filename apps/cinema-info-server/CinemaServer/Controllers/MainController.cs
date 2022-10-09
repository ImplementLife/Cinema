using Microsoft.AspNetCore.Mvc;

namespace CinemaServer.Controllers
{
    [ApiController]
    public class MainController : Controller
    {
        [HttpGet("/")]
        public IActionResult Sesions()
        {
            return Json("{Film:123,Dic:210},{Film:123,Dic:210},{Film:123,Dic:210}");
        }
        [HttpGet("/AllFilms")]
        public IActionResult AllFilms()
        {
            return Json("{Film:123,Dic:210},{Film:123,Dic:210},{Film:123,Dic:210},{Film:123,Dic:210},{Film:123,Dic:210},{Film:123,Dic:210}");
        }
    }
}
