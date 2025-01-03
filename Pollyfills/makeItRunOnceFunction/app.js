// function likeTheVideo() {
//   let called = 0;

//   return function () {
//     if (called == 0) {
//       console.log("You liked the video!");
//       called++;
//     } else {
//       console.log("You already liked the video!");
//     }
//   };
// }

// const like = likeTheVideo();

// like(); //You liked the video
// like(); //You already liked the video!

// function once(fn) {
//   let called = false; // Tracks whether the function has been called

//   return function (...args) {
//     if (!called) {
//       called = true;
//       return fn(...args); // Call the original function only once
//     }
//     // Do nothing for subsequent calls
//   };
// }

// // Example Usage
// function likeTheVideo() {
//   console.log("You liked the video!");
// }

// const like = once(likeTheVideo);

// like(); // Logs: "You liked the video!"
// like(); // Does nothing

function once(fn) {
  let called = false;

  return function (...args) {
    if (called == false) {
      called = true;
      return fn(args);
    }
  };
}

function subscribeMe() {
  console.log("Hey you subscribed to Ashutosh Bisht");
}

const subscribe = once(subscribeMe);

subscribe();
subscribe();
