let clicks = 0;

function openScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  trackAd();
}

function goHome() {
  openScreen('home');
}

function trackAd() {
  clicks++;
  if (clicks % 3 === 0) {
    alert("Interstitial Ad (Demo)");
  }
}

// CHAT
function sendMessage() {
  let input = document.getElementById('chatInput').value;
  let box = document.getElementById('chatBox');

  box.innerHTML += "<p>👤 " + input + "</p>";
  box.innerHTML += "<p>🤖 AI: I understand '" + input + "'</p>";
}

// RESUME
function generateResume() {
  let name = document.getElementById('name').value;
  let skills = document.getElementById('skills').value;
  let edu = document.getElementById('edu').value;

  document.getElementById('resumeOutput').innerText =
    name + "\nSkills: " + skills + "\nEducation: " + edu;
}

// CAPTION
function generateCaption() {
  let topic = document.getElementById('captionInput').value;

  document.getElementById('captionOutput').innerText =
    "🔥 " + topic + " vibes!\n😎 Living my best life\n❤️ Love this moment";
}

// HOMEWORK
function solveHW() {
  let q = document.getElementById('hwInput').value;

  document.getElementById('hwOutput').innerText =
    "Explanation: " + q + " is solved simply.";
}

// BUSINESS
function generateBiz() {
  let type = document.getElementById('bizInput').value;

  document.getElementById('bizOutput').innerText =
    type + " Hub\n" + type + " Pro\nSmart " + type;
}

// FARMING
function generateTips() {
  let crop = document.getElementById('cropInput').value;

  document.getElementById('farmOutput').innerText =
    "Tips for " + crop + ": Proper watering, sunlight, and fertilizer.";
}
