using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {

        // Register Postgres EF Core provider for using with our DbContext and specify the connection string. For this override the OnConfiguring method.
        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //    optionsBuilder.UseNpgsql("Host=localhost;database=DatingApp;Username=postgres;Password=postgres");
        // }

        public DataContext(DbContextOptions options) : base(options) {}
        
        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }
    }
}