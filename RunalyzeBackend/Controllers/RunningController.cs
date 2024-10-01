using Microsoft.AspNetCore.Mvc;
using RunalyzeBackend.Models;

namespace RunalyzeBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RunningController : ControllerBase
{
  [HttpGet]
  public ActionResult<Running> GetRunning()
  {
    Running running = new Running(
      id: "12",                             // Id as string
      date: DateTime.Now.AddDays(-1),        // Yesterday's date
      duration: 42,                          // Duration in minutes
      distance: 13,                          // Distance in kilometers
      elevation: 999,                        // Elevation gain in meters
      avgPower: 9001,                        // AvgPower
      avgCadence: 300,                       // AvgCadence (steps per minute)
      avgPaceSeconds: 150,                   // AvgPaceSeconds (2 min 30 sec per kilometer)
      avgHeartRate: 220,                     // AvgHeartRate (BPM)
      notes: "Ran from the fridge to the couch. Felt like The Flash!" // Notes
    );

    return Ok(running);
  }
}