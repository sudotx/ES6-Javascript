//this grabs the button from the markup(class of get-jokes),and listens for a click before calling get jokes
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  //once function is called, number is setup and attached to the value passed into the form input number type
  const number = document.querySelector('input[type = "number"]').value;
  //sets up a new instance of xmlhttprequest
  const xhr = new XMLHttpRequest();

  //requests the url n number of times
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  //tracks readystate of request, parses json string to json object when http request is successful(ie status is 200)
  xhr.onload = function () {
    // console.log("ready state: ", xhr.readyState);
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);

      let output = "";

      //runs loop thru the values of the json objects, and spits out the joke values, while appending it to the ui per json objects
      if (response.type == "success") {
        response.value.forEach(function (val) {
          output += `<li>${val.joke}</li>`;
        });
      } else {
        //exception
        output += `<li>something went wrong</li>`;
      }

      //spits output to the tag with class jokes
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
