myFunc = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });
  const error = false;
  if (!error) {
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

myFunc()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// getUsers = async () => {
//   //await response of the fetch of the url

//   const response = await fetch("https://api.instantwebtools.net/v1/airlines/12");

//   //only proceed once second promise(with data) is resolved

//   const data = await response.json();
  
//   //only proceed once second promise is resolved
    
//   return data;
  
// }
// getUsers().then((users) => {
//   console.log(users);
// });
