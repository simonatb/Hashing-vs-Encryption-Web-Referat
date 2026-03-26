var btn = document.createElement('button');
btn.id = 'back-top';
btn.innerHTML = '&#8679;';
btn.title = 'Back to top';
document.body.appendChild(btn);

window.addEventListener('scroll', function () {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';

  var sections = document.querySelectorAll('section[id]');
  var links    = document.querySelectorAll('nav a');
  var current  = '';
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  links.forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

btn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('nav a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});