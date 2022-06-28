document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //create xhr object
  const xhr = new XMLHttpRequest();
  //Open
  xhr.open("GET", "data.txt", true);

  // another way to do this is to --optional(used for spinners //and loaders)

  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("READYSTATE", xhr.readyState);
    if (this.status == 200) {
      // console.log(this.responseText);
      document.getElementById("output").innerHTML = `<h1>${this.responseText} ${xhr.readyState}</h1>`;
    }
  };

  // another way to do this is to --optional

  // xhr.onreadystatechange = function () {
  //   if (this.status == 200 && this.readyState == 4) {
  //     console.log(this.responseText);
  //   }
  // };

  //for an exception
  xhr.onerror = function () {
    console.log("Request error...");
  };

  xhr.send();
  //ready state values
  //0 : request not initialized(unsent)
  //1 : server connection established(open has been called)
  //2 : request received(header received)
  //3 : processing request
  //4 : request finished and response is ready

  // HTTP statuses
  // 200 : "ok"
  // 400: "Forbidden"
  // 404 :"Not found"
}
