const http = new easyHTTP();

//GET posts
// http.get(
//   "https://api.instantwebtools.net/v1/airlines/",
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

//GET single post
// http.get(
//   "https://api.instantwebtools.net/v1/airlines/1",
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

// create data
const data = {
  name: "Hudson",
  trips: 500,
};

//PUT and DELETE not working giving error 502

//create POST(to be saved on to server)
// http.post(
//   "https://api.instantwebtools.net/v1/airlines",
//   data,
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

//update post --PUT
// http.put(
//   "https://api.instantwebtools.net/v1/passenger/1",
//   data,
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

//DELETE post
http.delete(
  "https://api.instantwebtools.net/v1/passenger/1",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
