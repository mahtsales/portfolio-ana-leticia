const revealElements = document.querySelectorAll('.reveal');
const progressBar = document.querySelector('.progress-bar');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

const counters = document.querySelectorAll('[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = +entry.target.dataset.target;
      const duration = 1200;
      let start = 0;
      const stepTime = Math.max(Math.floor(duration / target), 20);
      const increment = target > 0 ? 1 : 0;

      const updateCounter = () => {
        start += increment;
        entry.target.textContent = start;
        if (start < target) {
          window.requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

window.addEventListener('scroll', () => {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
});

function openMail(event) {
  event.preventDefault();
  const form = event.target;
  const name = encodeURIComponent(form.name.value.trim());
  const message = encodeURIComponent(form.message.value.trim());
  const subject = encodeURIComponent('Contato pelo portfólio de Ana Letícia');
  const mailto = `mailto:analeticiasantana63@gmail.com?subject=${subject}&body=Olá Ana,%0D%0A%0D%0AMe chamo ${name}.%0D%0A%0D%0A${message}`;
  window.location.href = mailto;
}
