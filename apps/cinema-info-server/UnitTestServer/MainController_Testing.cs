using CinemaServer.Controllers;
using CinemaServer.Data;
using CinemaServer.Data.DTO;
using CinemaServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace UnitTestServer
{
    [TestFixture]
    public class MainController_Testing
    {
        private MainController mainController;
        private AppDbContext appDbContext;
        private CinemaService cinemaService;
        [SetUp]        
        public void Setup()
        {           
            appDbContext = new AppDbContext();
            cinemaService = new CinemaService(appDbContext);
            mainController = new MainController(cinemaService);
        }

        [Test]
        public void Main_IsResult()
        {
            var result = mainController.Main() as JsonResult;
            Assert.AreEqual("Main",result.Value);
        }
        [Test]
        public void Main_IsResultNotNull()
        {
            var result = mainController.Main();
            Assert.NotNull(result);
        }
        [Test]
        public void Movies_NotNull()
        {
            var result = mainController.Movies();
            Assert.NotNull(result);
        }
        [Test]
        public void Movies_IsJsonObject()
        {
            var result = mainController.Movies() as JsonResult;
            Assert.AreEqual(result.Value.GetType(),typeof(List<DTOMainInfoMovie>));
        }

    }
}