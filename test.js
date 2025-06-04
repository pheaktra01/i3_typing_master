let timerElement = document.getElementById('timer');
let typingArea = document.getElementById('typingArea');
let textToType = document.getElementById('textToType').innerText;

let timeLeft = 6;
let timer;
let testStarted = false;

function startTest() {
  if (testStarted) return; // Prevent multiple starts
  testStarted = true;

  typingArea.disabled = false;
  typingArea.focus();

  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      finishTest();
      
      
    }
  }, 1000);
}

function finishTest() {
  isTestRunning = false;
  typingArea.disabled = true;

  const typedText = typingArea.value.trim();
  const wordsTyped = typedText.split(/\s+/).length;
  const correctChars = countCorrectChars(typedText, textToType);
  const accuracy = Math.round((correctChars / textToType.length) * 100);
  const wpm = wordsTyped;

  // Store result in localStorage
  localStorage.setItem("latestResult", JSON.stringify({
    date: new Date().toLocaleString(),
    wpm: wpm,
    accuracy: accuracy
  }));

  // Redirect to results page
  window.location.href = "result.html";
}

function countCorrectChars(input, reference) {
  let count = 0;
  for (let i = 0; i < input.length && i < reference.length; i++) {
    if (input[i] === reference[i]) count++;
  }
  return count;
}
