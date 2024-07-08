function showText(chapterId) {
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
      text.classList.remove('active');
    });
    const selectedText = document.getElementById(chapterId);
    selectedText.classList.add('active');
  }
  