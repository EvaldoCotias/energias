// Script para menu mobile
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fechar menu quando clicar num link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if(target){
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simulação de envio do formulário
const form = document.getElementById('contact-form');
const messageP = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  messageP.style.color = 'white';
  messageP.textContent = 'Enviando...';

  setTimeout(() => {
    messageP.style.color = '#66ffda';
    messageP.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    form.reset();
  }, 1500);
});
