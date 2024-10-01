var builder = WebApplication.CreateBuilder(args);


// Service Registration
builder.Services.AddControllers();

// Building the Application
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
}

app.MapControllers();
app.Run();