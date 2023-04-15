const textareaEl = document.getElementById("textarea");
const maxCharLimit = parseInt(textareaEl.getAttribute("maxlength"));
const totalCharCounterEl = document.getElementById("total-char-counter");
const remainingCharCounter = document.getElementById("remaining-char-counter");

let currentCharCount = 0;

totalCharCounterEl.innerText = 0;
remainingCharCounter.innerText = maxCharLimit;

textareaEl.addEventListener("keyup", () => {
  const textLength = textareaEl.value.length;

  const diff = maxCharLimit - textLength;

  remainingCharCounter.innerText = diff;
  totalCharCounterEl.innerText = textLength;

  if (diff < 18) {
    remainingCharCounter.dataset.status = "red";
  } else if (diff < 34) {
    remainingCharCounter.dataset.status = "yellow";
  } else {
    remainingCharCounter.dataset.status = "green";
  }
});
