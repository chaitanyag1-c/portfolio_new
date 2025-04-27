const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  };
  
  window.onload = () => {
    const body = document.body;
    body.classList.add('fade-in');
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
    }
  };
  