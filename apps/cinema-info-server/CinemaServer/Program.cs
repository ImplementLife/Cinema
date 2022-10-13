using CinemaServer.Data;
using CinemaServer.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileSystemGlobbing.Internal.Patterns;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var ConnectString = builder.Configuration.GetConnectionString("ConnectStringDB");
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(ConnectString);
});
builder.Services.AddTransient<CinemaService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapControllers();
app.MapRazorPages();
app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Main}/{action=Main}/{id?}"
                );

app.UseEndpoints(endpoints =>
{
    endpoints.MapRazorPages();
});
app.Run();
