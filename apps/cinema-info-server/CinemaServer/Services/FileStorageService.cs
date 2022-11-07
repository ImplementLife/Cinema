using CinemaServer.Entities;
using CinemaServer.Services.Новая_папка;
using System.Text.Json;
using System.IO;

namespace CinemaServer.Services
{
    public class FileStorageService : IUpload
    {
        public string Upload(IFormFile File)
        {
            DateTime dateCreate = DateTime.Now;
            string nameImg = dateCreate.Ticks.ToString();
            nameImg += File.FileName;            
            string filePath = GetConnectionString("PathToImg")+nameImg;
            using (var stream = System.IO.File.Create(filePath))
            {
                File.CopyTo(stream);
                return nameImg;
            }
        }
        private string GetConnectionString(string NameConnectingString)
        {
           return WebApplication.CreateBuilder().Configuration.GetConnectionString(NameConnectingString);
        }
    }
}
