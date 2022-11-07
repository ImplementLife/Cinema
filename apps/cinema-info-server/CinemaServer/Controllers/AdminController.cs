using CinemaServer.Data.DTO;
using CinemaServer.Entities;
using CinemaServer.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;
using Newtonsoft.Json;
using System.Security.Principal;
using CinemaServer.Data.DTO.InterfaceDTO;

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
        [HttpPost("admin/movie")]        
        public IActionResult AddMovie(IFormCollection IFC)
        {           
            CinemaService.CreateMovie(IFC);
            return Json("Create Complete ^_^ <З ");
        }
        [HttpGet("admin/movie")]
        public IActionResult GetMovieID(int id)
        {
            return Json(CinemaService.GetMovieById(id));
        }
        [HttpDelete("admin/movie")]
        public IActionResult DelMovieID(int id)
        {
            return Json(CinemaService.DeleteMovieById(id));
        }
        [HttpPut("admin/movie")]
        public IActionResult UpdateMovie(IFormCollection IFC)
        {
            return Json(CinemaService.UpdateMovie(IFC));
        }
        [HttpGet("admin/tags")]
        public IActionResult AllTags()
        {
            return Json(CinemaService.AllTags());
        }
        [HttpPost("admin/tags")]
        public IActionResult SaveTags(Tag tag)
        {            
            CinemaService.SaveTag(tag.Name);
            return Ok("Vlad Daun");
        }
        [HttpGet("Admin/AllHall")]
        public IActionResult AllHall()
        {
            return Json(CinemaService.AllHall()) ;
        }
        [HttpGet("Admin/movies")]
        public IActionResult AllMovie()
        {
            return Json(CinemaService.AllMovie());
        }
        

    }
}
