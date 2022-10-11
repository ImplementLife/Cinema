using CinemaServer.Controllers;
using CinemaServer.Entities;
using Microsoft.EntityFrameworkCore;

namespace CinemaServer.Data
{
    public class AppDbContext :DbContext
    {      
        public DbSet<Movie> Movies { get; set; }
        public AppDbContext(DbContextOptions options) : base(options){}        
    }
}
