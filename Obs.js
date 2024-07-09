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

document.addEventListener('DOMContentLoaded', () => {
  function playRandomSong() {
      const song1 = document.getElementById('song1');
      const song2 = document.getElementById('song2');
      const songs = [song1, song2].filter(song => song !== null); // Filter out null elements
      if (songs.length === 0) return; // Exit if no songs are found

      const randomIndex = Math.floor(Math.random() * songs.length);
      const chosenSong = songs[randomIndex];

      chosenSong.play();
  }

  playRandomSong(); // Play a random song on page load
});
});