const posts = [
  { title: "post One", body: "this is post One" },
  { title: "post Two", body: "this is post Two" },
];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "post Three", body: "this is post three" });

// getPosts();

//create post
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      //this runs in iterations the function passed in it once every 2000 milliseconds(2secs)
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

//get post
function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "post Three", body: "this is post three" })
  .then(getPosts) //attaches callback of resolution of promise
  .catch(function (err) {
    //attaches callback of rejection of promise
    document.body.innerHTML = err; //shows error in html body
  });
