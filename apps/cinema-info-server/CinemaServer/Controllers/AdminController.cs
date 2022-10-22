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
        [HttpPost("admin/createmovie")]        
        public IActionResult AddMovie(IFormCollection IFC)
        {           
            CinemaService.AddMovie(IFC);
            return Json("Create Complete ^_^ <З ");
        }       
        [HttpGet("admin/tags")]
        public IActionResult AllTags()
        {
            return Json(CinemaService.AllTags());
        }
        [HttpPost("admin/tags")]
        public IActionResult SaveTags(Tag tag)
        {
            string name = tag.Name;
            CinemaService.SaveTag(name);
            return Ok("Vlad Daun");
        }
        [HttpGet("Admin/AllHall")]
        public IActionResult AllHall()
        {
            return Json(CinemaService.AllHall()) ;
        }
        [HttpGet("Admin/AllMovie")]
        public IActionResult AllMovie()
        {
            return Json(CinemaService.movieConvertor.ConvertToList(CinemaService.AllMovie()));
        }
    }
}
