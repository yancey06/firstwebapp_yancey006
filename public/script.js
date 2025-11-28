const quotes = [
  "Believe you can and you're halfway there.",
  "Success is no accident.",
  "Dream big. Work hard. Stay focused.",
  "Small steps every day lead to big results.",
  "Your only limit is your mind.",
  "Push yourself, because no one else will do it for you.",
  "Don't watch the clock; do what it does. Keep going.",
  "Hard work beats talent when talent doesn't work hard.",
  "Great things never come from comfort zones.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't stop when you're tired. Stop when you're done.",
  "Believe in yourself and all that you are.",
  "Your future is created by what you do today, not tomorrow.",
  "It always seems impossible until it's done.",
  "The secret to getting ahead is getting started.",
  "You are stronger than you think.",
  "Dream it. Wish it. Do it.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Keep going. Everything you need will come to you at the perfect time.",
  "Don't limit your challenges. Challenge your limits.",
  "The best way to predict the future is to create it.",
  "Do something today that your future self will thank you for.",
  "Failure is not the opposite of success; it's part of success.",
  "You don't have to be perfect to be amazing.",
  "Stay positive, work hard, make it happen."
];

const flipCard = document.getElementById("flipCard");
const quoteText = document.getElementById("quoteText");

// Flip card
flipCard.addEventListener("click", () => {
  const card = document.querySelector(".card");
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = quote;
  card.classList.toggle("flipped");
});

// Music buttons
document.querySelector(".play").addEventListener("click", e => {
  e.stopPropagation();
  alert("Play button clicked!");
});
document.querySelector(".prev").addEventListener("click", e => {
  e.stopPropagation();
  alert("Previous track!");
});
document.querySelector(".next").addEventListener("click", e => {
  e.stopPropagation();
  alert("Next track!");
});
// Dynamic background based on album image
const albumImage = document.getElementById("albumImage");

albumImage.addEventListener("load", () => {
  const vibrantColor = getAverageColor(albumImage);
  document.body.style.background = `linear-gradient(135deg, ${vibrantColor}, #000)`;
});

// Function to get average color of the image
function getAverageColor(img) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  let r = 0, g = 0, b = 0, count = 0;

  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  r = Math.floor(r / count);
  g = Math.floor(g / count);
  b = Math.floor(b / count);

  return `rgb(${r},${g},${b})`;
}