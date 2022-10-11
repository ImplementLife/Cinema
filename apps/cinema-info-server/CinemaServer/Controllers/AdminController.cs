using Microsoft.AspNetCore.Mvc;

namespace CinemaServer.Controllers
{
    [ApiController]
    public class AdminController : Controller
    {
        public IActionResult Autorization()
        {
            return View();
        }
    }
}
