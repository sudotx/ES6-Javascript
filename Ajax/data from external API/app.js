//This grabs the button from the HTML(the class of get-jokes)
//listens for a click
//before calling get jokes

//listens for a click on the get-jokes class
document.querySelector(".get-jokes").addEventListener("click", getJokes);

//once function is called,
//number is setup and assigned to the value
//passed into the form "input number type"

function getJokes(e) {
  const number = document.querySelector('input[type = "number"]').value; //assigns variable to value passed into form
  const xhr = new XMLHttpRequest(); //sets up a new instance of xmlhttprequest

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true); //requests the url n number of times

  xhr.onload = function () {
    // console.log("ready state: ", xhr.readyState);
    if (this.status == 200) {
      const response = JSON.parse(this.responseText); //tracks readystate of request, parses json string to json object when http request is successful(ie status is 200)

      let output = "";

      if (response.type == "success") {
        response.value.forEach(function (val) {
          output += `<li>${val.joke}</li>`; //runs loop thru the values of the json objects, and spits out the joke values, while appending it to the ui per json objects
        });
      } else {
        output += `<li>something went wrong</li>`; //exception
      }

      document.querySelector(".jokes").innerHTML = output; //spits output to the tag with class jokes
    }
  };

  xhr.send();
  e.preventDefault();
}
