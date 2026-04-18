document.addEventListener('DOMContentLoaded', () => {
  const themeSwitchBtn = document.getElementById('theme-switch');
  const body = document.body;
  const logoImage = document.getElementById('logo-image');
  
  // URLs de los logos
  const lightModeLogo = "/img/logo/LOGO BEMAKER-14 copy.PNG";
  const darkModeLogo = "/img/logo/LOGO BEMAKER-16 copy.png";

  // Alternar tema
  function toggleTheme() {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      logoImage.src = lightModeLogo;
      themeSwitchBtn.textContent = '☀️';
    } else {
      logoImage.src = darkModeLogo;
      themeSwitchBtn.textContent = '🌙';
    }
  }

  themeSwitchBtn.addEventListener('click', toggleTheme);
});
