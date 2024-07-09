function showText(chapterId) {
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
      text.classList.remove('active');
    });
    const selectedText = document.getElementById(chapterId);
    selectedText.classList.add('active');
  }

  // Function to randomly play the GIF
function playGif() {
  const gifElement = document.getElementById('static-gif');
  const staticSrc = gifElement.src;
  const gifSrc = gifElement.getAttribute('data-gif');

  // Set the static image first
  gifElement.src = staticSrc;

  // Chance to play the GIF every 5 seconds
  setInterval(() => {
      if (Math.random() > 0.2) { // 20% chance to play the GIF
          gifElement.src = gifSrc;
          setTimeout(() => {
              gifElement.src = staticSrc;
          }, 1500); // Play for 3 seconds
      }
  }, 10000);
}

// Initialize the GIF control
document.addEventListener('DOMContentLoaded', () => {
  playGif();
});