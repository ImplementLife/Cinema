using CinemaServer.Entities;
using Microsoft.EntityFrameworkCore;

namespace CinemaServer.Data
{
    public class AppDbContext :DbContext
    {
        private static string IpServer = "(localdb)";
        private static string NameDB = "Cinema";
        public DbSet<Movie> Movies { get; set; }
        public AppDbContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer($@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Cinema;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;");
        }
    }
}
