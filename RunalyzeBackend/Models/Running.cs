namespace RunalyzeBackend.Models;

public class Running
{
   public string Id { get; set; }
   public DateTime Date { get; set; }
   public int Duration { get; set; }
   public int Distance { get; set; }
   public int Elevation { get; set; }
   public int AvgPower { get; set; }
   public int AvgCadence { get; set; }
   public int AvgPaceSeconds { get; set; }
   public int AvgHeartRate { get; set; }
   public string Notes { get; set; }
   public Running(string id, DateTime date, int duration, int distance, int elevation, int avgPower, int avgCadence, int avgPaceSeconds, int avgHeartRate, string notes)
   {
      Id = id;
      Date = date;
      Duration = duration;
      Distance = distance;
      Elevation = elevation;
      AvgPower = avgPower;
      AvgCadence = avgCadence;
      AvgPaceSeconds = avgPaceSeconds;
      AvgHeartRate = avgHeartRate;
      Notes = notes;
   }


   
   
}