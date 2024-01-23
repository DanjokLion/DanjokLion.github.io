function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.querySelectorAll('.bx-icon, .link-site').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.2)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
