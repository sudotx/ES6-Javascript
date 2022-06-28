/**
 * @version 3.0.0
 * @author Oc
 * @license MIT
 *
 */

class easyHTTP {
  //get method
  async get(url) {
    const response = await fetch(url);
    const reData = await response.json();
    return reData;
  }
  //post request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  //PUT request //! not working as...
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      // mode: 'no-cors',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  //DELETE request 
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      // mode: "no-cors",
      headers: {
        "content-type": "application/json",
      },
    });
    const resData = await "Resource deleted..";
    return resData;
  }
}
