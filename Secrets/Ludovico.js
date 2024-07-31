document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const gifContainer = document.querySelector('.gif-container');
        const staticGif = document.getElementById('static-gif');
        
        gifContainer.style.display = 'block'; // Show the GIF container
        
        // Replace the static image with the GIF
        staticGif.src = staticGif.getAttribute('data-gif');
        
        // After the GIF finishes playing, replace it with the last frame
        staticGif.addEventListener('load', () => {
            const gifDuration = 5000; // Adjust this value to the duration of your GIF in milliseconds
            setTimeout(() => {
                staticGif.src = 'Ludo.jpg'; // Replace with the last frame image of the GIF
            }, gifDuration);
        });
    }, 35000); // 35 seconds delay
});
