const http = new easyHTTP();

const data = {
  name: "Chester Lopez",
};

//get users

// http
//   .get("https://api.instantwebtools.net/v1/airlines/1")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// create post

// http
//   .post("https://api.instantwebtools.net/v1/airlines", data)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//put request(update post)

// http
//   .put("https://api.instantwebtools.net/v1/passenger/1", data)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//delete request(delete post)

http
  .delete("https://api.instantwebtools.net/v1/passenger/1")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
