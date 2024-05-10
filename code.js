
////////////////
const maintext = document.getElementById("mainmethod")
const inputvalue = document.getElementById("input-value")



//// displaying the location 

function addtask(){
    if(inputvalue.value  === ""){
        alert("you have enter the task")
    }
    else{
        const APIKey = "c571bdc6178841d4bde164623242204";
        let city = document.getElementById("input-value").value;

        const queryURL = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`;
let test = inputvalue.value;


// Make the API request
fetch(queryURL)
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Accessing the temperature value
    let temperatureInCelsius = data.current.temp_c;

    const temperatureInforen = data.current.temp_f;
    console.log("Temperature in ForenHeat:", temperatureInforen);
    const latitude = data.location.lat;
    const longitude = data.location.lon;
     
    let li = document.createElement("p");
    li.innerHTML = "Current Weather of "+test;
    maintext.appendChild(li)
    

    let h4 = document.createElement("h4");
    h4.innerHTML = temperatureInCelsius+"°C";
    maintext.appendChild(h4)
    
    let h3 = document.createElement("h3")
    h3.innerHTML = "latitude - "+ latitude + "  longitude - "+ longitude;
    maintext.appendChild(h3)

  })
  .catch(error => {
    console.error("Error fetching data:", error);
    alert("you have enterd a wrong location")
  });

        
       
 // to clear input box field
   inputvalue.value = " "
}

}