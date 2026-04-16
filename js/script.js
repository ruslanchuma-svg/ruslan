// АНИМАЦИЯ ПРИ СКРОЛЛЕ
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// ФОРМА
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      successMessage.style.display = 'block';
      form.reset();
    } else {
      alert('Ошибка при отправке. Попробуйте позже.');
    }
  }).catch(() => {
    alert('Ошибка при отправке. Попробуйте позже.');
  });
});
// ===== КНОПКА НАВЕРХ =====

const topBtn = document.getElementById("topBtn");

// показать / скрыть кнопку
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

// клик -> вверх
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});