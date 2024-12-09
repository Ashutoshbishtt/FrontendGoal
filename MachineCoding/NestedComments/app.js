let commentCounter = 1;
const button = document.getElementById("addCommentButton");
const inputField = document.getElementById("commentInput");
const commentsBox = document.querySelector(".commentsBox");

button.addEventListener("click", () => {
  const text = inputField.value.trim();
  if (text === "") {
    alert("Please enter something in the comment");
    return;
  }

  addComment(text, commentsBox);
  inputField.value = ""; // Clear input field
});

function addComment(text, parentElement) {
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("singleComment");

  const commentText = document.createElement("h4");
  commentText.classList.add("comment");
  commentText.innerText = text;

  const replyButton = document.createElement("button");
  replyButton.classList.add("commentReply");
  replyButton.innerText = "Reply";
  replyButton.addEventListener("click", () => handleReply(commentDiv));

  commentDiv.appendChild(commentText);
  commentDiv.appendChild(replyButton);
  parentElement.appendChild(commentDiv);
}

function handleReply(parentComment) {
  console.log(parentComment)
  const replyInput = document.createElement("textarea");
  replyInput.classList.add("commentBox");
  replyInput.setAttribute("rows", "3");
  replyInput.setAttribute("cols", "30");
  replyInput.setAttribute("placeholder", "Enter your reply...");

  const submitReplyButton = document.createElement("button");
  submitReplyButton.classList.add("submitButton");
  submitReplyButton.innerText = "Submit Reply";

  const replyContainer = document.createElement("div");
  submitReplyButton.addEventListener("click", () => {
    const replyText = replyInput.value.trim();
    if (replyText === "") {
      alert("Please enter something in the reply");
      return;
    }

    addComment(replyText, replyContainer);
    replyInput.remove();
    submitReplyButton.remove();
  });

  parentComment.appendChild(replyInput);
  parentComment.appendChild(submitReplyButton);
  parentComment.appendChild(replyContainer);
}
