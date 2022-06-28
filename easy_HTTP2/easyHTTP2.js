/**
 *
 * easyHTTP Library Library for making HTTP     Requests
 *
 * @version 2.0.0
 * @author Oc
 * @license MIT
 *
 **/

class easyHTTP {
  //get method
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json()) //returns a promise
        .then((data) => resolve(data)) //returns data as json from promise to console
        .catch((error) => reject(error)); //returns error on reject to console
    });
  }
  //post request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json()) //returns a promise
        .then((data) => resolve(data)) //returns data from promise to console
        .catch((error) => reject(error)); //returns error on reject to console
    });
  }

  //PUT request //not working as...
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json()) //returns a promise
        .then((data) => resolve(data)) //returns data from promise to console
        .catch((error) => reject(error)); //returns error on reject to console
    });
  }

  //DELETE request //unchecked...
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json()) //returns a promise
        .then(() => resolve("Resource deleted")) //returns data from promise to console(but ber it can just return an empty string)
        .catch((error) => reject(error)); //returns error on reject to console
    });
  }
}
