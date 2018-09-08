var FormLink = document.querySelector(".btn-form");
var feedbackForm = document.querySelector(".feedback-form");
var overlay = document.querySelector(".modal-overlay");
var CloseButton = document.querySelector(".close-button")
var userName = feedbackForm.querySelector("[name=name]");
var commentsForm = document.querySelector(".comments-form");
var emailFeedback = feedbackForm.querySelector("[name=email-feedback]");
var message = feedbackForm.querySelector("[name=message-area]");


var storage = "";
var storsgeSupport = true;
try {
  storage = localStorage.getItem("userName");
} catch (err) {
  storage = false;
  storageSupport = false;
}


FormLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.add("show");
  feedbackForm.classList.add("animation");
  overlay.classList.add("show");
  if (storage) {
    userName.value = storage;
    emailFeedback.value = localStorage.emailFeedback;
    message.focus;

  } else {
    userName.focus();
  }

});

CloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("show");
  overlay.classList.remove("show");
  feedbackForm.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains("show")) {
      evt.preventDefault();
      feedbackForm.classList.remove("show");
      overlay.classList.remove("show");
      feedbackForm.classList.remove("modal-error");
    }
  }
});

commentsForm.addEventListener("submit", function (evt) {
  if (!userName.value || !emailFeedback.value || !message.value) {
    evt.preventDefault();
    feedbackForm.classList.remove("modal-error");
    feedbackForm.classList.add("modal-error");
  } else if (storageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("emailFeedback", emailFeedback.value);

  }
})
