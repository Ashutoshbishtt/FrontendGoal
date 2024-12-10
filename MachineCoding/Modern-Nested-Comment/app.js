const commentsBox = document.querySelector(".commentsBox");
const button = document.getElementById("addCommentButton");
const inputField = document.getElementById("commentInput");
const commentsData = [];

button.addEventListener("click", () => {
  const text = inputField.value.trim();
  if (text === "") {
    alert("Please enter something in the comment");
    return;
  }

  addComment(text);
  inputField.value = "";
});

function addComment(text) {
  const newComment = {
    id: commentsData.length + 1,
    text,
    replies: [],
  };
  commentsData.push(newComment);
  renderComments();
}

function addReply(commentId, replyText) {
  const comment = commentsData.find((c) => c.id === commentId);
  if (comment) {
    comment.replies.push(replyText);
    renderComments();
  }
}

function renderComments() {
  commentsBox.innerHTML = "";
  commentsData.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsBox.appendChild(commentElement);
  });
}

function createCommentElement(comment) {
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("singleComment");
  commentDiv.setAttribute("data-id", comment.id);

  const commentText = document.createElement("h4");
  commentText.classList.add("comment");
  commentText.innerText = comment.text;

  const replyButton = document.createElement("button");
  replyButton.classList.add("commentReply");
  replyButton.innerText = "Reply";
  replyButton.addEventListener("click", () => handleReply(comment.id));

  commentDiv.appendChild(commentText);
  commentDiv.appendChild(replyButton);

  comment.replies.forEach((replyText) => {
    const replyDiv = document.createElement("div");
    replyDiv.classList.add("reply");
    replyDiv.innerText = replyText;
    commentDiv.appendChild(replyDiv);
  });

  return commentDiv;
}

function handleReply(commentId) {
  const commentDiv = document.querySelector(
    `.singleComment[data-id="${commentId}"]`
  );

  if (commentDiv.querySelector(".commentBox")) return;

  const replyInput = document.createElement("textarea");
  replyInput.classList.add("commentBox");
  replyInput.setAttribute("rows", "3");
  replyInput.setAttribute("placeholder", "Enter your reply...");

  const submitReplyButton = document.createElement("button");
  submitReplyButton.classList.add("submitButton");
  submitReplyButton.innerText = "Submit Reply";

  submitReplyButton.addEventListener("click", () => {
    const replyText = replyInput.value.trim();
    if (replyText === "") {
      alert("Please enter something in the reply");
      return;
    }

    addReply(commentId, replyText);
  });

  commentDiv.appendChild(replyInput);
  commentDiv.appendChild(submitReplyButton);
}
