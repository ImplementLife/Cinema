using CinemaServer.Services.Новая_папка;
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
            string filePath = @$"C:\Users\march\source\repos\Cinema\apps\cinema-info-server\CinemaServer\wwwroot\resources\images\{nameImg}";
            using (var stream = System.IO.File.Create(filePath))
            {
                File.CopyTo(stream);
                return nameImg;
            }
        }
    }
}
