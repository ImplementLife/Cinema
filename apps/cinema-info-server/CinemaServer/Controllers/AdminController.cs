using Microsoft.AspNetCore.Mvc;

namespace CinemaServer.Controllers
{
    [ApiController]
    public class AdminController : Controller
    {
        [HttpGet("/test")]
        public IActionResult Autorization()
        {
            return View();
        }
    }
}
