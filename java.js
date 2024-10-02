// Example of a simple toggle functionality for small screens
const nav = document.querySelector('nav');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';
toggleButton.style.display = 'none';
document.body.insertBefore(toggleButton, nav);

toggleButton.addEventListener('click', () => {
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 600) {
    toggleButton.style.display = 'block';
    nav.style.display = 'none';
  } else {
    toggleButton.style.display = 'none';
    nav.style.display = 'block';
  }
});