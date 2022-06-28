const http = new easyHTTP();

const data = {
  name: "Josephine Scott",
};

//get users //working

http
  .get("https://api.instantwebtools.net/v1/airlines/1")
  .then((data) => {
    return data;
  })
  .catch((error) => {
    return error;
  });

// create post //working

http
  .post("https://api.instantwebtools.net/v1/airlines", data)
  .then((data) => {
    return data;
  })
  .catch((error) => {
    return error;
  });

//put request(update post) //not working

http
  .put("https://api.instantwebtools.net/v1/passenger/1", data)
  .then((data) => {
    return data;
  })
  .catch((error) => {
    return error;
  });

//delete request(delete post)

http
  .delete("https://api.instantwebtools.net/v1/passenger/1")
  .then((data) => {
    return data;
  })
  .catch((error) => {
    return error;
  });
