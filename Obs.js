function showText(chapterId) {
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
      text.classList.remove('active');
    });
    const selectedText = document.getElementById(chapterId);
    selectedText.classList.add('active');
  }

  function playGif() {
    const gifElement = document.getElementById('static-gif');
    const staticSrc = gifElement.src;
    const gifSrc = gifElement.getAttribute('data-gif');
  
    setInterval(() => {
        if (Math.random() <= 0.05) { // 5% chance
            gifElement.src = gifSrc;
            setTimeout(() => {
                gifElement.src = staticSrc;
            }, 1500); 
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
      const songs = [song1, song2].filter(song => song !== null); 
      if (songs.length === 0) return; 

      const randomIndex = Math.floor(Math.random() * songs.length);
      const chosenSong = songs[randomIndex];

      chosenSong.play();
  }

  playRandomSong(); 
});