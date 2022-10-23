using CinemaServer.Controllers;
using CinemaServer.Data.Entities;
using CinemaServer.Entities;
using Microsoft.EntityFrameworkCore;

namespace CinemaServer.Data
{
    public class AppDbContext :DbContext
    {      
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Ticket> Ticket { get; set; }

        public AppDbContext(DbContextOptions options) : base(options){}
        //UnitTest
        public AppDbContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer($"Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Cinema;Integrated Security=True;");
        }
    }
}
