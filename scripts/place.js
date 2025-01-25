// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Footer functionality: Display current year and last modified date
    const currentYearElement = document.getElementById("current-year");
    const lastModifiedElement = document.getElementById("last-modified");
  
    // Get and display the current year
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
  
    // Get and display the last modified date of the document
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = `Last Modification: ${lastModified}`;
  
    // Weather section: Static temperature and wind speed values
    const temperature = 10; // Temperature in °C
    const windSpeed = 5; // Wind speed in km/h
    const windChillElement = document.getElementById("wind-chill");
  
    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
      // Wind chill formula: Metric version
      return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
      ).toFixed(1); // Round the result to 1 decimal place
    }
  
    // Determine if wind chill calculation is applicable
    if (temperature <= 10 && windSpeed > 4.8) {
      const windChill = calculateWindChill(temperature, windSpeed);
      windChillElement.textContent = `${windChill} °C`; // Display calculated wind chill
    } else {
      windChillElement.textContent = "N/A"; // Display "N/A" if conditions are not met
    }
  });
  