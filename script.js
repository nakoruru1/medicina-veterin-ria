// =========================================
// MENU MOBILE RESPONSIVO
// =========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isExpanded = navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isExpanded);
});

// Fecha o menu automaticamente ao clicar em qualquer link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================
// UPLOAD DE FOTOS REAIS DO STAND
// =========================================
document.querySelectorAll('.upload-input').forEach((input) => {
  input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const targetImgId = event.target.getAttribute('data-target');
    const targetImg = document.getElementById(targetImgId);

    if (file && targetImg) {
      const reader = new FileReader();
      reader.onload = (e) => {
        targetImg.src = e.target.result;
        targetImg.alt = `Foto carregada do stand: ${file.name}`;
      };
      reader.readAsDataURL(file);
    }
  });
});
