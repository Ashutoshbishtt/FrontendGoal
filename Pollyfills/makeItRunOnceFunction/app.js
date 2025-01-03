function likeTheVideo() {
  let called = 0;

  return function () {
    if (called == 0) {
      console.log("You liked the video!");
      called++;
    } else {
      console.log("You already liked the video!");
    }
  };
}

const like = likeTheVideo();

like(); //You liked the video
like(); //You already liked the video!
