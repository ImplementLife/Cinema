using CinemaServer.Services.Новая_папка;

namespace CinemaServer.Services
{
    public class FileStorageService : IUpload
    {
        public string Upload(IFormFile File)
        {
            Random random = new Random();
            DateTime dateTime = DateTime.Now;
            string name = dateTime.Ticks.ToString();
            name += File.FileName;
            string filePut = @$"C:\Users\march\source\repos\Cinema\apps\cinema-info-server\CinemaServer\wwwroot\resources\images\{name}";

            using (var stream = System.IO.File.Create(filePut))
            {
                File.CopyTo(stream);
                return name;
            }
        }
    }
}
