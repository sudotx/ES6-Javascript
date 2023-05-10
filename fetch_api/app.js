document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getAPIdata);

//get data from text file
function getText() {
  //fetches test.txt returns promise
  fetch("test.txt")
    .then((res) => res.text())
    //returns text in promise
    .then((data) => {
      // then logs it to the console
      console.log(data);
      // also inject this as a new node into the DOM
      document.getElementById("output").innerHTML = data;
    })
    //returns error on rejection
    .catch((err) => {
      console.log(err);
      document.getElementById("output").innerHTML = data;
    });
}
//get data from json file
function getJson() {
  //fetch from json
  fetch("post.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      //loop through array of json files
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    //throw error to html body
    .catch((err) => {
      console.log(err);
      document.getElementById("output").innerHTML = err;
    });
}
function getAPIdata() {
  //fetch from external api as json, in this case a list of users
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      //loop thru array of json files, throw output to html body
      data.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    //throw error to html body
    .catch((err) => {
      console.log(err);
      document.getElementById("output").innerHTML = err;
    });
}
