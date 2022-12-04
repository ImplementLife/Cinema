using CinemaServer.Data.DTO;
using CinemaServer.Entities;
using CinemaServer.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;
using Newtonsoft.Json;
using System.Security.Principal;
using CinemaServer.Data.DTO.InterfaceDTO;
using Microsoft.Extensions.Logging;

namespace CinemaServer.Controllers
{ 
    [ApiController]
    public class AdminController : Controller
    {
        CinemaService CinemaService;
        private readonly ILogger _logger;
        public AdminController(CinemaService cinemaService, ILogger<AdminController> logger)
        {
            CinemaService = cinemaService;
            _logger = logger;
        }

        [HttpPost("admin/movie")]        
        public IActionResult AddMovie(IFormCollection IFC)
        {
            _logger.LogInformation("Post: admin/movie is called",IFC);
            CinemaService.CreateMovie(IFC);
            return Json("Create Complete ^_^ <З ");
        }
        [HttpGet("admin/movie")]
        public IActionResult GetMovieID(int id)
        {
            _logger.LogInformation("GET: admin/movie is called",id);
            return Json(CinemaService.GetMovieById(id));
        }
        [HttpDelete("admin/movie")]
        public IActionResult DelMovieID(int id)
        {
            _logger.LogInformation("DELETE: admin/movie is called",id);
            return Json(CinemaService.DeleteMovieById(id));
        }
        [HttpPut("admin/movie")]
        public IActionResult UpdateMovie(IFormCollection IFC)
        {
            _logger.LogInformation("PUT: admin/movie is called",IFC);
            return Json(CinemaService.UpdateMovie(IFC));
        }
        [HttpGet("admin/tags")]
        public IActionResult AllTags()
        {
            _logger.LogInformation("Post: admin/movie is called");
            return Json(CinemaService.AllTags());
        }
        [HttpPost("admin/tags")]
        public IActionResult SaveTags(Tag tag)
        {
            _logger.LogInformation("Post: admin/tags is called",tag);
            CinemaService.SaveTag(tag.Name);
            return Ok("Vlad Daun");
        }
        [HttpGet("Admin/AllHall")]
        public IActionResult AllHall()
        {
            _logger.LogInformation("GET: Admin/AllHall is called");
            return Json(CinemaService.AllHall()) ;
        }
        [HttpGet("Admin/movies")]
        public IActionResult AllMovie()
        {
            _logger.LogInformation("GET: Admin/movies is called");
            return Json(CinemaService.AllMovie());
        }
        

    }
}
