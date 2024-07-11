function enterSite() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'flex';
  playGif();
  playRandomSong();
}
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

  function promptPassword() {
    const password = prompt("Enter the password:", "");
    if (password === null) {
        // User clicked 'Cancel'
        return;
    }
    const correctPassword = "O.S.I. Love you"; // Replace with your actual password
    if (password === correctPassword) {
        window.location.href = "index.html"; // Replace with your desired URL
    } else {
        alert("Incorrect.");
    }
}

document.getElementById('static-gif').addEventListener('click', promptPassword);
document.addEventListener('DOMContentLoaded', () => {
  playGif();
});
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('main-content').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  function playRandomSong() {
      const song1 = document.getElementById('song1');
      const song2 = document.getElementById('song2');
      const songs = [song1, song2].filter(song => song !== null); 
      if (songs.length === 0) return; 

      const randomIndex = Math.floor(Math.random() * songs.length);
      const chosenSong = songs[randomIndex];

      chosenSong.play().then(() => {
          console.log('Playback started');
      }).catch(error => {
          console.error('Playback failed:', error);
          // Inform the user and request interaction
          document.body.addEventListener('click', () => {
              chosenSong.play().then(() => {
                  console.log('Playback started after user interaction');
              }).catch(error => {
                  console.error('Playback still failed:', error);
              });
          }, { once: true });
      });
  }

  playRandomSong(); 
});
