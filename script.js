(function () {
  var button = document.getElementById('themeToggle');
  if (!button) return;

  function setTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('portfolio-theme', theme);
    button.textContent = theme === 'dark' ? 'Switch to light' : 'Switch to dark';
  }

  var currentTheme = localStorage.getItem('portfolio-theme');
  if (!currentTheme) {
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  setTheme(currentTheme);

  button.addEventListener('click', function () {
    var nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    setTheme(nextTheme);
  });
})();
