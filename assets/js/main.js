document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
  
      document.querySelectorAll('.faq-answer').forEach((openAnswer) => {
        if (openAnswer !== answer) {
          openAnswer.style.display = 'none';
        }
      });
  
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });

  const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerMenu = document.querySelector('.header-menu');

hamburgerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
});


